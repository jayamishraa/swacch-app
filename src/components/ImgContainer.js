// import React from 'react'

// function ImgContainer() {
//   return (
//     <div className='img-container'>
//       <div>
//         <h2>Let's make this country</h2>
//         <h1>CLEANER <span style={{color: 'white'}}>&</span> GREENER</h1>
//       </div>
//     </div>
//   )
// }
import React from "react";
import '../swach-img.jpg'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://static2.bigstockphoto.com/5/1/3/large1500/315286111.jpg" },
  { url: "https://external-preview.redd.it/BI2T2hamYD1az3OdHeg_8_VYZfFK8nQzfgEQs25Tkho.jpg?auto=webp&s=99ae861f4dd0e3031f53f1c474ae9cbf0d4e2b04" },
  { url: "https://thecsrjournal.in/wp-content/uploads/2018/10/Canon-Cleanliness-Drive.jpg" },
  { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_k74q2Ic3FJCt-vm9PoPZRK__NkgQc7CTd4X86zuLuV9lXGI7Un0kOVOpoopI3zVJac&usqp=CAU" },
  { url: "https://s3.youthkiawaaz.com/wp-content/uploads/2021/10/14182849/500-300-7.jpg" },
  { url: "https://qph.cf2.quoracdn.net/main-qimg-7a07f4a5d4c654b6f5455422e7a1f887-lq" },
  { url: "https://newsonair.gov.in/writereaddata/News_Pictures/MIS/2022/Oct/NPIC-20221021413.jpg" },
];

const ImgContainer = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1520}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={3}
      />
    </div>
  );
}

export default ImgContainer