var combo = 0;
var points = 0000000;

function section(from, to) {
    this.begin = from;
    this.end = to;
}

var sections = [];

function addSection(section) {
    sections.push(section);
    console.log("Added section " + section.begin + " " + section.end);
}

// TEMP

var insection = false;

setInterval(function() {
    if (sections.length >= 1) {
        this.current = getMillis();

        if (insection) {
            // If it's already too late
            if (this.current > sections[0].end){
                insection = false;
            }
        }
        else {
            if (this.current > sections[0].begin && this.current < sections[0].end){
                // Section begun
                insection = true;
                playSectionsound(true);
                console.log("section started");
            }
        }


        
    }
}, 10)