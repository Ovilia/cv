var gb = {
    PAPER_GAP: 50,
    
    totalHeight: 0,
    paperWidth: 0,
    paperCnt: 0,
    paperMargin: 0,
    
    lastTop: 0,
    windowWidth: 0
};



function init() {
    // height of entire document
    gb.totalHeight = document.body.scrollHeight || gb.totalHeight;
    // width of a paper
    gb.paperWidth = $('.paper').width() + parseInt($('.paper').css('padding'))
            * 2 || gb.paperWidth;
    // number of papers
    gb.paperCnt = $('.paper').length;
    
    // width of document
    gb.windowWidth = $(window).width();
    
    resize();
}

function resize() {
    // width of document
    gb.windowWidth = $(window).width();
    
    var paperTotalWidth = gb.PAPER_GAP * (gb.paperCnt - 1) + gb.paperWidth;
    // margin outside of papers
    gb.paperMargin = (gb.windowWidth - paperTotalWidth) / 2;
    
    setPaper();
}

// center the papers
function centerPapers() {
    //code
}



// update paper position and transform
function setPaper() {
    var top = $(window).scrollTop();
    var id = getSelectedPaper(top);
    var $papers = $('.paper');
    var selected = $papers[id];
    if (selected !== undefined) {
        $('.paper').removeClass('paper__selected');
        $(selected).addClass('paper__selected');
        
        var left = gb.paperMargin;
        for (var i = 0; i < $papers.length; ++i) {
            if ($papers[i] !== undefined) {
                $($papers[i]).css('left', left);
                if (i === id) {
                    // selected paper
                    left += gb.paperWidth;
                } else {
                    // folded papers
                    left += gb.PAPER_GAP;
                }
            }
        }
    } else {
        console.error('Error selected paper!');
    }
}

// get the most likely selected paper according to scroll top
function getSelectedPaper(top) {
    var ratio = top / gb.totalHeight;
    var id = Math.ceil(ratio * gb.paperCnt);
    if (id >= gb.paperCnt) {
        id = gb.paperCnt - 1;
    }
    return id;
}



$(document).ready(function() {
    init();
    
    $(window).scroll(function(e) {
        setPaper();
        
    }).resize(resize);
});
