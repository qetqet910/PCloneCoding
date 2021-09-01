
window.onload = function(){

    const lay = document.querySelector('.lay');

    const lays0 = document.getElementsByClassName('lay_li')[0];
    const lays1 = document.getElementsByClassName('lay_li')[1];
    const lays2 = document.getElementsByClassName('lay_li')[2];
    const lays3 = document.getElementsByClassName('lay_li')[3];

    const nav_li0 = document.getElementsByClassName('nav_li')[0];
    const nav_li1 = document.getElementsByClassName('nav_li')[1];
    const nav_li2 = document.getElementsByClassName('nav_li')[2];
    const nav_li3 = document.getElementsByClassName('nav_li')[3];

    const PJT = document.getElementsByClassName('Projects')[0];

    const C1 = document.querySelector('.top');
    const C2 = document.querySelector('.bottom');
    const C3 = document.querySelector('.bottom').offsetHeight;
    const C4 = document.querySelector('.cursor');

    let IDX = 0;

    nav_li0.addEventListener('mouseover', N1);
    nav_li1.addEventListener('mouseover', N2);
    nav_li2.addEventListener('mouseover', N3);
    nav_li3.addEventListener('mouseover', N4);

    nav_li0.addEventListener('mouseout', L1);
    nav_li1.addEventListener('mouseout', L2);
    nav_li2.addEventListener('mouseout', L3);
    nav_li3.addEventListener('mouseout', L4);

    lay.addEventListener('mouseover', LM);
    lay.addEventListener('mouseout', LO);

    function N1(e){
        lay.style.display = 'block';
        lays0.style.display = 'flex';
        IDX = 1;
    }
    function L1(e){
        lay.style.display = 'none';
        lays0.style.display = 'none';
    }

    function N2(e){
        lay.style.display = 'block';
        lays1.style.display = 'flex';
        IDX = 2;
    }
    function L2(e){
        lay.style.display = 'none';
        lays1.style.display = 'none';
    }

    function N3(e){
        lay.style.display = 'block';
        lays2.style.display = 'flex';
        IDX = 3;
    }
    function L3(e){
        lay.style.display = 'none';
        lays2.style.display = 'none';
    }

    function N4(e){
        lay.style.display = 'block';
        lays3.style.display = 'flex';
        IDX = 4;
    }
    function L4(e){
        lay.style.display = 'none';
        lays3.style.display = 'none';
    }

    function LM(e){
        lay.style.display = 'flex';
        if(IDX == 1){
            lays0.style.display = 'flex';
        }
        if(IDX == 2){
            lays1.style.display = 'flex';
        }
        if(IDX == 3){
            lays2.style.display = 'flex';
        }
        if(IDX == 4){
            lays3.style.display = 'flex';
        }
    }
    function LO(e){
        lay.style.display = 'none';
        if(IDX == 1){
            lays0.style.display = 'none';
        }
        if(IDX == 2){
            lays1.style.display = 'none';
        }
        if(IDX == 3){
            lays2.style.display = 'none';
        }
        if(IDX == 4){
            lays3.style.display = 'none';
        }
    }

    function OMM(e){
        C4.style.display = 'block';
        const x = e.x, y = e.offsetY;    
        C4.style.left = x + "px";
        C4.style.top = y + "px";
    }
    function OMM2(e){
        C4.style.display = 'block';
        const y = C3 + e.offsetY, x = e.x;
        C4.style.left = x + "px";
        C4.style.top = y + "px";
    }

    function PO(e){
        C4.style.display = 'none';
    }

C1.addEventListener("mousemove", OMM);
C2.addEventListener("mousemove", OMM2);
PJT.addEventListener("mouseleave", PO);

    // window.scroll({
    //     top: 100,
    //     left: 100,
    //     behavior: 'smooth'
    // });




    const Container = document.querySelector('.container');
    const News_li1 = document.getElementsByClassName('N')[0];
    const News_li2 = document.getElementsByClassName('N')[1];
    const News_li3 = document.getElementsByClassName('N')[2];
    const News_cursor1 = document.getElementsByClassName('cursor')[1];
    const News_cursor2 = document.getElementsByClassName('cursor')[2];
    const News_cursor3 = document.getElementsByClassName('cursor')[3];
    const News_ig_offset = document.getElementsByClassName('ig')[0].offsetHeight;
    console.log(News_ig_offset)

    // for(let i = 0; i < News_li.length; i++){
    //     VarName = News_li[i];
    //     VarCursor = News_cursor[i];
    //     VarName.addEventListener('mousemove', function(e){
    //         VarCursor.style.left = e.offsetX;
    //         VarCursor.style.right = e.offsetY;
    //     })
    // }

    News_li1.addEventListener('mousemove', (e) => {
        News_cursor1.style.display = 'block';
        News_cursor1.style.left = e.offsetX + 'px';
        News_cursor1.style.top = e.offsetY + 'px';
    })
    News_li1.addEventListener('mouseleave', (e) => {
        News_cursor1.style.display = 'none';
    })
    
    News_li2.addEventListener('mousemove', (e) => {
        News_cursor2.style.display = 'block';
        News_cursor2.style.left = e.offsetX + 'px';
        News_cursor2.style.top = e.offsetY + 'px';
    })
    News_li2.addEventListener('mouseleave', (e) => {
        News_cursor2.style.display = 'none';
    })

    News_li3.addEventListener('mousemove', (e) => {
        News_cursor3.style.display = 'block';
        News_cursor3.style.left = e.offsetX + 'px';
        News_cursor3.style.top = e.offsetY + 'px';
    })
    News_li3.addEventListener('mouseleave', (e) => {
        News_cursor3.style.display = 'none';
    })
}
