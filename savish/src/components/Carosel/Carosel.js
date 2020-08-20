// import React,{useEffect} from 'react'
// import styles from "./Carosel.Module.css"
// function Carosel() {
//     const [data, setData] = useState([])
//     const [array, setArray] = useState([])
//     const [jumpSlideWidth, setJumpSlideWidth] = useState(0)
//     useEffect(() => {
//         const controls=document.querySelector(".controls");
//         const container=document.querySelector(".thumbnailcontainer");
//         const allBox=container.children;
//         const containerWidth=container.offsetWidth;
//         const margin=30;
//          var items=0;
//          var totalItems=0;
//          responsive=[
//             {breakPoint:{width:0,item:1}}, //if width greater than 0 (1 item will show) 
//             {breakPoint:{width:600,item:4}}, //if width greater than 600 (2  item will show) 
//             {breakPoint:{width:1000,item:5}} //if width greater than 1000 (4 item will show) 
//            ]
//            for(let i=0; i<responsive.length;i++){
//             if(window.innerWidth>responsive[i].breakPoint.width){
//                 items=responsive[i].breakPoint.item
//             }
//         }
        
//  	 var totalItemsWidth=0
//       for(let i=0;i<allBox.length;i++){
//            // width and margin setup of items
//           allBox[i].style.width=(containerWidth/items)-margin + "px";
//           allBox[i].style.margin=(margin/2)+ "px";
//          totalItemsWidth+=containerWidth/items;
//          totalItems++;
//          array.push(totalItems)
//       }
 
//         // start();
//            // thumbnail-container width set up
//            container.style.width=totalItemsWidth + "px";
      
//            const allSlides=Math.ceil(totalItems/items);
                         
//         const img0 = require('../../../photos/sa1.JPG');
//         const img1 = require('../../../photos/sa2.JPG');
//         const img2 = require('../../../photos/sa4.JPG');
//         const img3 = require('../../../photos/sa5.JPG');
//         const img4 = require('../../../photos/sa6.JPG');
//         const img5 = require('../../../photos/sa7.JPG');
//         const img6 = require('../../../photos/sa8.JPG');
//         const img7 = require('../../../photos/sa3.JPG');
//         const img8 = require('../../../photos/saboii.JPG');
//         setData({
//             index: 0,
//             imgList: [img0, img1, img2, img3, img4, img5, img6, img7, img8],
//             name: ['Savishkar', 'Rohit Narulkar', 'Suniti Gaonkar', 'Aishwarya Parab', 'Shivam Raikar', 'Aarushi Raghav', 'Vritika Naik', 'Erisha Ferrao', 'Deepraj Bhosle'],
//             designation: ['Council', 'President', 'Chairperson', 'Literature section', 'Art Section', 'PR & Managment', 'Technical Adviser', 'Secretary', 'Assistance Technical Advisar']
//         })
        
//       // thumbnail-container width set up
//       container.style.width=totalItemsWidth + "px";
//     }
  
//     , [])
//     // function start(){
//     //     var totalItemsWidth=0
//     //    for(let i=0;i<allBox.length;i++){
//     //         // width and margin setup of items
//     //        allBox[i].style.width=(containerWidth/items)-margin + "px";
//     //        allBox[i].style.margin=(margin/2)+ "px";
//     //       totalItemsWidth+=containerWidth/items;
//     //       totalItems++;
//     //    }
  
//     // }
//     function controlSlides(ele){
//         // select controls children  'ul' element 
//         const ul=controls.children;
 
//         // select ul children 'li' elements;
//        const li=ul[0].children
         
        
//         var active;
 
//         for(let i=0;i<li.length;i++){
//             if(li[i].className=="active"){
//                 // find who is now active
//                 active=i;
//                 // remove active class from all 'li' elements
//                 li[i].className="";
//             }
//         }
//         // add active class to current slide
//         ele.className="active";
 
//         var numb=(ele.id-1)-active;
//            setJumpSlideWidth(jumpSlideWidth+(containerWidth*numb));
//         container.style.marginLeft=-jumpSlideWidth + "px";
//   }
//     return (
//         <div className={styles.thumbnailslider}>
// 	<div className={styles.thumbnailcontainer}>
// 		{
//             data.name.map((e,i)=>
//             <div class="item">
//                 <img src={data.imgList[i]} />
//                 <p>{e}</p>
//         <p>{data.designation[i]}</p>
//             </div>)
//         }
// 	</div>
//     <ul>
//     {/* for(let i=1;i<=allSlides;i++){
//           const li=document.createElement("li");
//                li.id=i;
//                // li.innerHTML=i;
//                li.setAttribute("onclick","controlSlides(this)");
//                ul.appendChild(li);
//                if(i==1){
//                	li.className="active";
//                }
//         } */}
//     {
//         array.forEach(element => {
//             if(element==1)
//             return(<li id={element} onClick={controlSlides} classaName="active"/>)
//             else
//             return(<li id={element} onClick={controlSlides} />)
//         })
//     }
//     </ul>
// {/*   
//   <!-- controls slides --> */}
//   <div className={styles.controls}>
//   </div>

// </div>

  //  )
//}

//export default Carosel
import React,{useEffect,useState} from 'react'
import styles from "./Carosel.module.css"
import "../../App.css"
function Carosel() {
	const [allSlide, setallSlide] = useState(0);
	const [jumpSlideWidth, setJumpSlideWidth] = useState(0)
	useEffect(() => {
		 let controls=document.querySelector(".Carosel_controls__1r3-c");
		 let container=document.querySelector(".Carosel_thumbnailcontainer__H94le");
		        const allBox=container.children;
		        let containerWidth=container.offsetWidth;
		        const margin=30;
		         var items=0;
				 var totalItems=0;
		        let responsive=[
		            {breakPoint:{width:0,item:1}}, //if width greater than 0 (1 item will show) 
		            {breakPoint:{width:600,item:4}}, //if width greater than 600 (2  item will show) 
		            {breakPoint:{width:1000,item:5}} //if width greater than 1000 (4 item will show) 
		           ]
		           for(let i=0; i<responsive.length;i++){
		            if(window.innerWidth>responsive[i].breakPoint.width){
		                items=responsive[i].breakPoint.item
		            }
				}
				    var totalItemsWidth=0
   for(let i=0;i<allBox.length;i++){
       allBox[i].style.width=(containerWidth/items)-margin + "px";
       allBox[i].style.margin=(margin/2)+ "px";
      totalItemsWidth+=containerWidth/items;
      totalItems++;}
   container.style.width=totalItemsWidth + "px";
	setallSlide(Math.ceil(totalItems/items))	   
	},[])

const controlSlides=(ele)=>{
	// alert("called")	
     // select controls children  'ul' element 
     const li=document.querySelector(".Carosel_controls__1r3-c").children;
	//  console.log(ul)
     // select ul children 'li' elements;
    // const li=ul[0].children
    // console.log(li)
     var active=0;

     for(let i=0;i<li.length;i++){
         if(li[i].className=="active"){
             // find who is now active
             active=i;
             // remove active class from all 'li' elements
             li[i].className="";
         }
	 }
	//  console.log(ele)
     // add active class to current slide
     ele.target.className="active";
// console.log(ele.target.id)
	 var numb=((ele.target.id-1)-active)/2;
	 let containerWidth=document.querySelector(".Carosel_thumbnailcontainer__H94le").offsetWidth
	//  console.log(containerWidth)
	 console.log(numb)
		setJumpSlideWidth(jumpSlideWidth+(containerWidth*numb));
		console.log(jumpSlideWidth)
		document.querySelector(".Carosel_thumbnailcontainer__H94le").style.marginLeft=-jumpSlideWidth + "px";
	 	console.log(document.querySelector(".Carosel_thumbnailcontainer__H94le").style.marginLeft)
	}
    return (
        <div className={styles.thumbnailslider}>
		<div className={styles.thumbnailcontainer}>
		<div className={styles.item}>
			1
		</div>
		<div className={styles.item}>	
			2
		</div>
		<div className={styles.item}>
			3
		</div>
		<div className={styles.item}>
			4
		</div>
		<div className={styles.item}>
			5
		</div>
		<div className={styles.item}>
			6
		</div>
		<div className={styles.item}>
			7
		</div>
		<div className={styles.item}>
			8
		</div>
		<div className={styles.item}>
			9
		</div>
		<div className={styles.item}>
			10
		</div>
	</div>
  
  <ul className={styles.controls} >
	  {
		Array.from(Array(allSlide), (_, i) => i + 1).map((e)=>{
			return(
			<li onClick={controlSlides} key={e} id={e}></li>)}
		)  
	  }
  </ul>
</div>
    )
}
export default Carosel