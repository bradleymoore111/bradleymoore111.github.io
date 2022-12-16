$(function() {
    let overlay, map, prevClicked = null;
    //const imageSource = "";
    const imageSource = "https://bradleymoore111.github.io/pog/";
    const defaultYear = 1965;

    const styledMap = new google.maps.StyledMapType(
	data.styled_map_attrs,
	{name: 'Styled Map'});

    const pussy = {
	url: trashyImage("pussy.png"),
	scaledSize: new google.maps.Size(40, 50),
	origin: new google.maps.Point(0, 0),
	anchor: new google.maps.Point(20, 25)
    }; //

    const specialPussy = {
	url: trashyImage("special-pussy.png"),
	scaledSize: new google.maps.Size(50, 60),
	origin: new google.maps.Point(0, 0),
	anchor: new google.maps.Point(25, 30)
    };

    const prodTicks = {
	ticks: [1965, 1975, 1985, 1995, 2005],
	ticks_labels: ['1965', '1975', '1985', '1995', '2005']
    };
    
    const playTicks = {
	ticks: [1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
	ticks_labels: ['1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005']
    };

    const ticks = prodTicks; // playTicks, or prodTicks

    const sliderProps = {
	formatter: function(value) {
	    return "Year: " + value;
	},
	ticks: ticks.ticks,
	value: defaultYear,
	ticks_labels: ticks.ticks_labels
    };

    $("#timeline-slider-year").slider(sliderProps)
	.on('slideStop', function(e) {
	    setVisibleDates(e.value);
	}).on('slide', function(e) {
	    setVisibleDates(e.value);
	}).trigger('hover');

    function trashyImage(i) {
	return imageSource + i;
    }

    function setupTimeline() {
	for (let i=0; i<data.timeline_entries.length; i++) {
	    const the = data.timeline_entries[i];
	    const el = jQuery(".row .col-6 .timeline-event[data-id='" + the.num + "']");

	    // Generate the html
	    let s = '<div class="card"><div class="card-body">' +
		the.title + ' - ' + the.year + 
		'</div></div>';

	    el.html(s)
		.css('margin-top', the.mt + 'px')
		.css('cursor', 'pointer')
		.click(function(e) {
		    // Fill the modal with information
		    jQuery(".modal-title").html(the.title + ' - ' + the.year);
		    jQuery(".modal-body").html(the.body);
		    jQuery(".modal").modal();
		});
	}
    }


    function setVisibleDates(year) {
	for (let i=0; i<data.theaters.length; i++) {
	    const the = data.theaters[i];
	    if (the.yearOpened && the.yearClosed) {
		the.marker.setVisible(
		    the.yearOpened <= year &&
			the.yearClosed >= year);
	    }
	}
    }

    function loadTheaterInfo(t) {
	if (prevClicked == t) {
	    return;
	}
	
	// Update the marker of the clicked one
	t.marker.setIcon(specialPussy);
	t.marker.setZIndex(5);

	// Reset the marker of the previous one
	if (prevClicked) {
	    prevClicked.marker.setIcon(pussy);
	    prevClicked.marker.setZIndex(0);
	}
	prevClicked = t;

	// Set title to the name + address
	$("#theater-title-output").text(t.name);

	// Create the information field
	let s = '<ul class="list-group">';
	const li = '<li class="list-group-item d-flex w-100 justify-content-between">' +
	      '<a class="li-key"><b>{0}:</b></a><a class="li-val">{1}</a></li>';

	s += li.format('Address', t.address);
	s += li.format('Date Opened', t.yearOpened);
	s += li.format('Date Closed', t.yearClosed);
	if (t.notes) {
	    s += '<li class="list-group-item d-flex w-100 justify-content-between">' +
		t.notes + '</li>';
	}

	s += '</ul>';

	s += '<img id="theater-pic" src="' + trashyImage('images/theater-' + t.id + '.jpg') + '">';

	$("#theater-info-output").html(s);
    }

    const views = {
	'ca': {
	    latLng: new google.maps.LatLng(
		35.234220115771315,
		-119.50813158701538),
	    zoom: 7
	},
	'la': {
	    latLng: new google.maps.LatLng(
		33.879605865620675,
		-118.23260258952516),
	    zoom: 10
	},
	'nc': {
	    latLng: new google.maps.LatLng(
		36.86887638110575,
		-120.96947538082001),
	    zoom: 8
	},
	'gq': {
	    latLng: new google.maps.LatLng(
		32.712925234935604,
		-117.1609642744066),
	    zoom: 18
	}
    };

    $("#map-views .btn-group .btn").on('click', function(e) {
	console.log($(this).data('id'));
	const view = views[$(this).data('id')];
	if (!view) {
	    console.log("Huh.");
	}

	map.panTo(view.latLng);
	map.setZoom(view.zoom);
    });

    function main() {
	const sleep = (milliseconds) => {
	    return new Promise(resolve => setTimeout(resolve, milliseconds))
	}

	Overlay.prototype = new google.maps.OverlayView();

	function initMap() {
	    console.log("Initing map");

	    const defaultView = views['ca'];
	    
	    map = new google.maps.Map(document.getElementById("map"), {
		zoom: defaultView.zoom,
		center: defaultView.latLng,
		mapTypeControl: false,
		gestureHandling: 'greedy', // greedy, cooperative, auto, or none
		mapTypeControlOptions: ['roadmap', 'styled_map'],
	    });

	    map.mapTypes.set('styled_map', styledMap);
	    map.setMapTypeId('styled_map');

	    console.log(map);
	    
	    // Add overlays
	    for (let i=0; i<data.theaters.length; i++) {
		// Find the lat/long
		const the = data.theaters[i];
		const parts = the.latlong.split(" ");
		const latLng = new google.maps.LatLng(
		    parseFloat(parts[0]),
		    parseFloat(parts[1]));
		
		// Okay, instead let's do markers.
		data.theaters[i].marker = new google.maps.Marker({
		    position: latLng,
		    icon: pussy,
		    map: map,
		    title: the.name,
		    zIndex: 0,
		});

		data.theaters[i].marker.addListener('click', function() {
		    loadTheaterInfo(data.theaters[i]);
		});

		if (! the.yearOpened || ! the.yearClosed) {
		    the.marker.setVisible(false);
		}
	    }
	}

	// US Geographical Survey Overlay (it's its ownn object).
	function Overlay(bounds, image, map) {
	    this.bounds_ = bounds;
	    this.image_ = image;
	    this.map_ = map;

	    this.div_ = null; // null for now, changes in onAdd
	    this.setMap(map);
	}
	Overlay.prototype.onAdd = function() {
	    var div = document.createElement('div');
	    div.style.border = 'none';
	    div.style.borderWidth = '0px';
	    div.style.position = 'absolute';

	    var img = document.createElement('img');
	    img.src = this.image_;
	    img.style.width = '100%';
	    img.style.height = '100%';
	    div.appendChild(img);

	    this.div_ = div;

	    var panes = this.getPanes();
	    panes.overlayImage.appendChild(this.div_);
	};

	Overlay.prototype.draw = function() {
	    var overlayProjection = this.getProjection();

	    var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
	    var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

	    var div = this.div_;
	    div.style.left = sw.x + 'px';
	    div.style.top = ne.y + 'px';
	    div.style.width = (ne.x - sw.x) + 'px';
	    div.style.height = (sw.y - ne.y) + 'px';
	};

	Overlay.prototype.onRemove = function() {
	    this.div_.parentNode.removeChild(this.div_);
	}

	Overlay.prototype.hide = function() {
	    if (this.div_) {
		this.div_.style.visibility = 'hidden';
	    }
	};

	Overlay.prototype.show = function() {
	    if (this.div_) {
		this.div_.style.visibility = 'visible';
	    }
	};

	Overlay.prototype.toggle = function() {
	    if (this.div_) {
		if (this.div_.style.visibility === 'hidden') {
		    this.show();
		} else {
		    this.hide();
		}
            }
	};

	Overlay.prototype.toggleDom = function() {
	    if (this.getMap()) {
		// Note: setMap(null) calls OverlayView.onRemove()
		this.setMap(null);
            } else {
		this.setMap(this.map_);
            }
	};

	initMap();

	setupTimeline();

	setVisibleDates(defaultYear);
    }

    main();

});

// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}
