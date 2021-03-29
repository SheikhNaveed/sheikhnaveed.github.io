function setGridClass() {
    var grid = $("#video-grid-wrapper");
    var videoCount = grid.find(".video-wrapper").length;
    console.log(videoCount);
    var gridClass = "";
    /*
        one person = 1x1 grid
        two person = 2x1 grid
        three-four person = 2x2 grid
        five-six = 3x2 grid
        > 6 then 4xN grid
    */
    if (videoCount >= 7) {

        gridClass = "grid-4xN";
    } else if(videoCount >= 5) {
        gridClass = "grid-3x2";
    } else if (videoCount >= 3) {
        gridClass = "grid-2x2";
    }
    else if (videoCount >= 2) {
        gridClass = "grid-2x1";
    }
    else {
        gridClass = "grid-1x1";
    }

//Remove existing classes
grid.removeClass(function (index, className) {
    return (className.match (/(^|\s)grid-\S+/g) || []).join(' ');
});

grid.addClass(gridClass);
}