import React, {createContext } from "react";
import kerala from './Homepage/imagesforHome/kerala.jpg'

export const Categorycontext = createContext();

export const CategoryProvider=(props)=>
{
    // OBJECTS RELATED TO LATEST IN HOME PAGE
const latestone = {
    image: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='aerobic' alt='notfound' />,
    title: "Aerobic",
    info: "Aerobic exercise is any type of cardiovascular conditioning. It can include activities like brisk walking, swimming, running, or cycling. You probably know it as cardio.",
    subinfo: <div id="sub-one" ><b>Fitness</b> / January 22, 2022 </div>
  }
  
  const latesttwo = {
    image: <img src="https://images.indianexpress.com/2021/12/RRR-trailer-launch-live-blog-1200.jpg?w=389" id="rrr" alt='notfound' />,
    title: "RRR Movie",
    info: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    subinfo: <div id="sub-two" ><b>Tollywood</b> / March 25, 2022 </div>
  }
  
  const latestthree = {
    image: <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" id="ptikka" alt='notfound' />,
    title: "Paneer Butter Masala",
    info: "Paneer Butter Masala is a popular and delicious tandoori snack where paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.",
    subinfo: <div id="sub-three" ><b>Food</b> / January 10, 2022 </div>
  }
  
  // OBJECTS RELATED TO TOP POST DETAILS IN HOME PAGE
  
  const toppostsdetailsone = {
    img: <img src={kerala} id='imgpost' alt='notfound' />,
    titletext: <b>Kerala : God's <br/>Own Country</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailstwo = {
    img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' alt='notfound' />,
    titletext: <b>Aerobic</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsthree = {
    img: <img src="https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" id='imgpost' alt='notfound' />,
    titletext: <b>Radhe Shyam Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsfour = {
    img: <img src="https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Cyber Security</b>,
    maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>
  
  
  }
  const toppostsdetailsfive = {
    img: <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" id='imgpost' alt='notfound' />,
    titletext: <b>Paneer Butter Masala</b>,
    maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN HOME PAGE
  
  const latestarticleone = {
    img: <img src={kerala} id='imglatest' alt='notfound' />,
    title: <b>Kerala : God's Own Country</b>,
    info: <p> Kerala is famous especially for its ecotourism initiatives <br/> and beautiful backwaters. Its unique culture and <br/>traditions, coupled with its varied demography,<br/> have made Kerala one of the most popular tourist<br/> destinations in the world</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }
  const latestarticletwo = {
    img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imglatest' alt='notfound' />,
    title: <b>Aerobic</b>,
    info: <p>Aerobic exercise is any type of cardiovascular conditioning.<br /> It can include activities like brisk walking, swimming,<br /> running, or cycling. You probably know it as cardio.</p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const latestarticlethree = {
    img: <img src="https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" id='imglatest' alt='notfound' />,
    title: <b>Radhe Shyam Movie</b>,
    info: <p>Radhe Shyam is an upcoming Indian period romantic <br/>drama film written and directed by Radha Krishna <br/> Kumar, starring Prabhas and Pooja Hegde.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const latestarticlefour = {
    img: <img src="https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg" id='imglatest' alt='notfound' />,
    title: <b>Cyber Security</b>,
    info: <p>Cyber security is the application of technologies,<br/> processes and controls to protect systems, networks, <br/>programs, devices and data from cyber attacks.<br/> It aims to reduce the risk of cyber attacks and <br/> protect against the unauthorised exploitation <br/>of systems, networks and technologies.</p>,
    moreinfo: <div><b>Technology</b> / January 22, 2022 </div>
  
  }
  const latestarticlefive = {
    img: <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" id='imglatest' alt='notfound' />,
    title: <b>Paneer Butter Masala</b>,
    info: <p>Paneer butter masala, also known as butter paneer is a  <br/>rich  and creamy curry made with paneer, spices, onions,<br/> tomatoes, cashews and butter.</p>,
    moreinfo: <div><b>Food</b> / January 22, 2022 </div>
  
  }


// OBJECTS RELATED TO TOP POST DETAILS IN FITNESS PAGE

const fitnesstoppostone = {
    img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imgpost' alt='notfound' />,
    titletext: <b>Aerobic</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const fitnesstopposttwo = {
    img: <img src="https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Flexibility</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const fitnesstoppostthree = {
    img: <img src="https://www.mensjournal.com/wp-content/uploads/mf/1280-run-track-sprint-shuttle.jpg?w=900&h=506&crop=1&quality=86&strip=all" id='imgpost' alt='notfound' />,
    titletext: <b>Sprint</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const fitnesstoppostfour = {
    img: <img src="https://www.verywellfit.com/thmb/xVLTx6KUBTuPDGbkgqXhehUWP68=/2122x1415/filters:fill(FFDB5D,1)/GettyImages-485244797-566eae435f9b583dc376e6ec.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Muscular Strength</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  const fitnesstoppostfive = {
    img: <img src="https://c0.wallpaperflare.com/preview/719/689/312/fitness-sports-gym-exercise.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Balance</b>,
    maintitle: <div id="main-one-toppost" ><b>Fitness</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN FITNESS PAGE
  
  const fitnesslatestone = {
    img: <img src="https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=" id='imglatest' alt='notfound' />,
    title: <b>Aerobic</b>,
    info: <p>Aerobic exercise is any type of cardiovascular conditioning.<br /> It can include activities like brisk walking, swimming,<br /> running, or cycling. You probably know it as cardio.</p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const fitnesslatesttwo = {
    img: <img src="https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg" id='imglatest' alt='notfound' />,
    title: <b>Flexibility</b>,
    info: <p>A flexibility exercise is a movement or position designed<br/> to stretch specific muscles, with the goal of increasing<br/> flexibility and range of motion in that specific area. </p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const fitnesslatestthree = {
    img: <img src="https://www.mensjournal.com/wp-content/uploads/mf/1280-run-track-sprint-shuttle.jpg?w=900&h=506&crop=1&quality=86&strip=all" id='imglatest' alt='notfound' />,
    title: <b>Sprint</b>,
    info: <p>Sprint running races are short distances races in which <br/>athletes try to run at their maximum speed throughout<br/> the entire distance of the race. </p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const fitnesslatestfour = {
    img: <img src="https://www.verywellfit.com/thmb/xVLTx6KUBTuPDGbkgqXhehUWP68=/2122x1415/filters:fill(FFDB5D,1)/GettyImages-485244797-566eae435f9b583dc376e6ec.jpg" id='imglatest' alt='notfound' />,
    title: <b>Muscular Strength</b>,
    info: <p>Muscular strength is a type of fitness directly related<br/> to muscle density and endurance, allowing athletes to perform more repetitions while lifting heavier weights.</p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }
  const fitnesslatestfive = {
    img: <img src="https://c0.wallpaperflare.com/preview/719/689/312/fitness-sports-gym-exercise.jpg" id='imglatest' alt='notfound' />,
    title: <b>Balance</b>,
    info: <p>Improving your balance makes you feel steadier<br/> on your feet and helps prevent falls. </p>,
    moreinfo: <div><b>Fitness</b> / January 22, 2022 </div>
  
  }


// OBJECTS RELATED TO TOP POST DETAILS IN TOURISM PAGE

const tourismtoppostone = {
    img: <img src= {kerala} id='imgpost' alt='notfound' />,
    titletext: <b>Kerala</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  }
  const tourismtopposttwo = {
    img: <img src="https://4.imimg.com/data4/WW/WW/GLADMIN-/wp-content-plugins-blank-uploads-gnw7rayjt4gsgkgk8k-500x500.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Kodaikanal</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  }
  const tourismtoppostthree = {
    img: <img src="https://www.nativeplanet.com/img/2020/01/cover-1579609724.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Jammu And Kashmir</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  }
  const tourismtoppostfour = {
    img: <img src="https://media.istockphoto.com/photos/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrowgauge-railway-in-picture-id1223612773?k=20&m=1223612773&s=612x612&w=0&h=BXBnyuqTtsyi-Y9tQP1OUSJ1l3Ce1bqIHhQjHwvHOdE=" id='imgpost' alt='notfound' />,
    titletext: <b>Shimla</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  }
  const tourismtoppostfive = {
    img: <img src="https://d1e00ek4ebabms.cloudfront.net/production/47610c3b-e9df-4cac-8438-a0dddff7f7e2.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Goa</b>,
    maintitle: <div id="main-one-toppost" ><b>Tourism</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN TOURISM PAGE
  
  const tourismlatestarticleone = {
    img: <img src={kerala} id='imglatest' alt='notfound' />,
    title: <b>Kerala</b>,
    info: <p>Kerala is famous especially for its ecotourism initiatives <br/> and beautiful backwaters. Its unique culture and <br/>traditions, coupled with its varied demography,<br/> have made Kerala one of the most popular tourist<br/> destinations in the world</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }
  const tourismlatestarticletwo = {
    img: <img src="https://4.imimg.com/data4/WW/WW/GLADMIN-/wp-content-plugins-blank-uploads-gnw7rayjt4gsgkgk8k-500x500.jpg" id='imglatest' alt='notfound' />,
    title: <b>Kodaikanal</b>,
    info: <p>Kodaikanal is known for its rich flora. Of the big trees, <br/>cypress, eucalyptus and acacia are the dominant <br/> varieties. Pear trees are numerous and the fruits<br/> are of high quality.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }
  const tourismlatestarticlethree = {
    img: <img src="https://www.nativeplanet.com/img/2020/01/cover-1579609724.jpg" id='imglatest' alt='notfound' />,
    title: <b>Jammu And Kashmir</b>,
    info: <p>Popularly known as the "Paradise on Earth", Jammu <br/> and Kashmir is world famous for its scenic splendour,<br/> snow-capped mountains, plentiful wildlife,<br/> exquisite monuments, hospitable people and local <br/> handicrafts.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }
  const tourismlatestarticlefour = {
    img: <img src="https://media.istockphoto.com/photos/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrowgauge-railway-in-picture-id1223612773?k=20&m=1223612773&s=612x612&w=0&h=BXBnyuqTtsyi-Y9tQP1OUSJ1l3Ce1bqIHhQjHwvHOdE=" id='imglatest' alt='notfound' />,
    title: <b>Shimla</b>,
    info: <p>The town is famous for pleasant walking experiences<br/> on hillsides surrounded by pine and oak forests.<br/> This capital city of Himachal Pradesh is famous for The <br/>Mall, ridge, and toy train. With colonial style buildings,<br/> the town has relics of ancient past that lend it a<br/> distinct look.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }
  const tourismlatestarticlefive = {
    img: <img src="https://d1e00ek4ebabms.cloudfront.net/production/47610c3b-e9df-4cac-8438-a0dddff7f7e2.jpg" id='imglatest' alt='notfound' />,
    title: <b>Goa</b>,
    info: <p>Goa is famous for adventure water sports, Goa offers <br/>the best water sports and other adventures sports<br/> such as scuba diving, paragliding, parasailing, banana <br/> boat riding and snorkelling.</p>,
    moreinfo: <div><b>Tourism</b> / January 22, 2022 </div>
  
  }

// OBJECTS RELATED TO TOP POST DETAILS IN TOLLYWOOD PAGE

const tollywoodtoppostone = {
    img: <img src="https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" id='imgpost' alt='notfound' />,
    titletext: <b>Radhe Shyam Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const tollywoodtopposttwo = {
    img: <img src="https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>RRR Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const tollywoodtoppostthree = {
    img: <img src="https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Pushpa Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const tollywoodtoppostfour = {
    img: <img src="https://cdn.gulte.com/wp-content/uploads/2022/02/Bheemla-Nayak-4.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Bheemla Nayak Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  const tollywoodtoppostfive = {
    img: <img src="https://static.toiimg.com/photo/msid-86503385/86503385.jpg?54616" id='imgpost' alt='notfound' />,
    titletext: <b>Salaar Movie</b>,
    maintitle: <div id="main-one-toppost" ><b>Tollywood</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN TOLLYWOOD PAGE
  
  const tollywoodlatestone = {
    img: <img src="https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214" id='imglatest' alt='notfound' />,
    title: <b>Radhe Shyam Movie</b>,
    info: <p>Radhe Shyam is an upcoming Indian period romantic <br/>drama film written and directed by Radha Krishna <br/> Kumar, starring Prabhas and Pooja Hegde.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const tollywoodlatesttwo = {
    img: <img src="https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg" id='imglatest' alt='notfound' />,
    title: <b>RRR Movie</b>,
    info: <p>RRR is an upcoming Indian Telugu-language period<br/> action drama film directed by S. S. Rajamouli, and<br/> produced by D. V. V. Danayya of DVV Entertainments.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const tollywoodlatestthree = {
    img: <img src="https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg" id='imglatest' alt='notfound' />,
    title: <b>Pushpa Movie</b>,
    info: <p>Based on the smuggling of red sander trees<br/> in Seshachalam forest, Andhra Pradesh, Pushpa<br/> tells the story of a lorry driver who is part of <br/>the illegal business.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const tollywoodlatestfour = {
    img: <img src="https://cdn.gulte.com/wp-content/uploads/2022/02/Bheemla-Nayak-4.jpg" id='imglatest' alt='notfound' />,
    title: <b>Bheemla Nayak Movie</b>,
    info: <p>Things change when the egos of an upright<br/> police officer and a retired army havildar clash.</p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }
  const tollywoodlatestfive = {
    img: <img src="https://static.toiimg.com/photo/msid-86503385/86503385.jpg?54616" id='imglatest' alt='notfound' />,
    title: <b>Salaar Movie</b>,
    info: <p>Salaar is an upcoming Indian action thriller film<br/> written and directed by Prashanth Neel. It stars<br/> Prabhas and Shruti Haasan. </p>,
    moreinfo: <div><b>Tollywood</b> / January 22, 2022 </div>
  
  }


// OBJECTS RELATED TO TOP POST DETAILS IN TECHNOLOGY PAGE

const technologytoppostone = {
    img: <img src="https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Cyber Security</b>,
    maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>
  
  
  }
  const technologytopposttwo = {
    img: <img src="https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Artificial Intelligence</b>,
    maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>
  
  
  }
  const technologytoppostthree = {
    img: <img src="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Block Chain Technology</b>,
    maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>
  
  
  }
  const technologytoppostfour = {
    img: <img src="https://i.ytimg.com/vi/cqgtdkURzTE/maxresdefault.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Cryptography</b>,
    maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>
  
  
  }
  const technologytoppostfive = {
    img: <img src="https://imageio.forbes.com/specials-images/imageserve/5f965d43ac32303829f68758/The-5-Biggest-Internet-Of-Things--IoT--Trends-In-2021-Everyone-Must-Get-Ready-For-Now/960x0.jpg?fit=bounds&format=jpg&width=960" id='imgpost' alt='notfound' />,
    titletext: <b>Internet Of Things</b>,
    maintitle: <div id="main-one-toppost" ><b>Technology</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN TECHNOLOGY PAGE
  
  const technologylatestone = {
    img: <img src="https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg" id='imglatest' alt='notfound' />,
    title: <b>Cyber Security</b>,
    info: <p>Cyber security is the application of technologies,<br/> processes and controls to protect systems, networks,<br/> programs, devices and data from cyber attacks.<br/> It aims to reduce the risk of cyber attacks and <br/> protect against the unauthorised exploitation <br/>of systems, networks and technologies.</p>,
    moreinfo: <div><b>Technology</b> / January 22, 2022 </div>
  
  }
  const technologylatesttwo = {
    img: <img src="https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg" id='imglatest' alt='notfound' />,
    title: <b>Artificial Intelligence</b>,
    info: <p>Artificial intelligence (AI) is the ability of a computer<br/> or a robot controlled by a computer to do tasks<br/> that are usually done by humans because <br/>they require human intelligence and discernment.</p>,
    moreinfo: <div><b>Technology</b> / January 22, 2022 </div>
  
  }
  const technologylatestthree = {
    img: <img src="https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg" id='imglatest' alt='notfound' />,
    title: <b>Block Chain Technology</b>,
    info: <p>Blockchain technology is most simply defined as <br/>a decentralized, distributed ledger that records<br/> the provenance of a digital asset.</p>,
    moreinfo: <div><b>Technology</b> / January 22, 2022 </div>
  
  }
  const technologylatestfour = {
    img: <img src="https://i.ytimg.com/vi/cqgtdkURzTE/maxresdefault.jpg" id='imglatest' alt='notfound' />,
    title: <b>Cryptography</b>,
    info: <p>Cryptography is the study of secure communications <br/>techniques that allow only the sender and intended <br/>recipient of a message to view its contents.</p>,
    moreinfo: <div><b>Technology</b> / January 22, 2022 </div>
  
  }
  const technologylatestfive = {
    img: <img src="https://imageio.forbes.com/specials-images/imageserve/5f965d43ac32303829f68758/The-5-Biggest-Internet-Of-Things--IoT--Trends-In-2021-Everyone-Must-Get-Ready-For-Now/960x0.jpg?fit=bounds&format=jpg&width=960" id='imglatest' alt='notfound' />,
    title: <b>Internet Of Things</b>,
    info: <p>The internet of things, or IoT, is a system of interrelated <br/>computing devices, mechanical and digital machines,<br/> objects, animals or people that are provided with<br/> unique identifiers (UIDs). </p>,
    moreinfo: <div><b>Technology</b> / January 22, 2022 </div>
  
  }
  // OBJECTS RELATED TO TOP POST DETAILS IN FOOD PAGE

const foodtoppostone = {
    img: <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" id='imgpost' alt='notfound' />,
    titletext: <b>Paneer Butter Masala</b>,
    maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>
  
  
  }
  const foodtopposttwo = {
    img: <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/rajma-recipe.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Rajma Masala</b>,
    maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>
  
  
  }
  const foodtoppostthree = {
    img: <img src="https://images.hindustantimes.com/img/2021/11/26/1600x900/palak_paneer_thumb_1637919968696_1637919979983.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Palak Paneer</b>,
    maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>
  
  
  }
  const foodtoppostfour = {
    img: <img src="http://www.yummyfoodrecipes.in/resources/picture/org/Karnataka-Style-Masala-Dosa.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Masala Dosa</b>,
    maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>
  
  
  }
  const foodtoppostfive = {
    img: <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/ven-pongal-recipe-1a.jpg" id='imgpost' alt='notfound' />,
    titletext: <b>Pongal</b>,
    maintitle: <div id="main-one-toppost" ><b>Food</b> / January 22, <br />2022 </div>
  
  
  }
  
  
  // OBJECTS RELATED TO LATEST ARTICLES IN FOOD PAGE
  
  const foodlatestarticleone = {
    img: <img src="https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1" id='imglatest' alt='notfound' />,
    title: <b>Paneer Butter Masala</b>,
    info: <p>Paneer butter masala, also known as butter paneer is a  <br/>rich  and creamy curry made with paneer, spices, onions,<br/> tomatoes, cashews and butter.</p>,
    moreinfo: <div><b>Food</b> / January 22, 2022 </div>
  
  }
  const foodlatestarticletwo = {
    img: <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/rajma-recipe.jpg" id='imglatest' alt='notfound' />,
    title: <b>Rajma Masala</b>,
    info: <p>Rajma is rich in molybdenum, iron, copper, folate,<br/> manganese, potassium and Vitamin K1. Of these,<br/> iron aids in several important functions of the body,<br/> while Vitamin K1 is important for blood coagulation.</p>,
    moreinfo: <div><b>Food</b> / January 22, 2022 </div>
  
  }
  const foodlatestarticlethree = {
    img: <img src="https://images.hindustantimes.com/img/2021/11/26/1600x900/palak_paneer_thumb_1637919968696_1637919979983.jpg" id='imglatest' alt='notfound' />,
    title: <b>Palak Paneer</b>,
    info: <p>Palak paneer (pronounced is a vegetarian dish,<br/> consisting of paneer (a type of cottage cheese)<br/> in a thick paste made from puréed spinach,</p>,
    moreinfo: <div><b>Food</b> / January 22, 2022 </div>
  
  }
  const foodlatestarticlefour = {
    img: <img src="http://www.yummyfoodrecipes.in/resources/picture/org/Karnataka-Style-Masala-Dosa.jpg" id='imglatest' alt='notfound' />,
    title: <b>Masala Dosa</b>,
    info: <p>Masala dosa is a variation of the popular South Indian dosa,<br/> which has its origins in Udupi cuisine of Karnataka.<br/> It is made from rice, lentils, potato, fenugreek,<br/> ghee and curry leaves, and served with chutneys<br/> and sambar.</p>,
    moreinfo: <div><b>Food</b> / January 22, 2022 </div>
  
  }
  const foodlatestarticlefive = {
    img: <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/ven-pongal-recipe-1a.jpg" id='imglatest' alt='notfound' />,
    title: <b>Pongal</b>,
    info: <p>Pongal is a delicious South Indian porridge <br/>made with rice and yellow moong lentils.<br/> It can be made sweet or savory.</p>,
    moreinfo: <div><b>Food</b> / January 22, 2022 </div>
  
  }



  return(
      <Categorycontext.Provider value={[latestone,latesttwo,latestthree,
      toppostsdetailsone,toppostsdetailstwo,toppostsdetailsthree,
      toppostsdetailsfour,toppostsdetailsfive,latestarticleone,
      latestarticletwo,latestarticlethree,latestarticlefour,
      latestarticlefive,fitnesstoppostone,fitnesstopposttwo,
      fitnesstoppostthree,fitnesstoppostfour,fitnesstoppostfive
      ,fitnesslatestone,fitnesslatesttwo,fitnesslatestthree,
      fitnesslatestfour,fitnesslatestfive,tourismtoppostone,tourismtopposttwo,
      tourismtoppostthree, tourismtoppostfour,tourismtoppostfive,
      tourismlatestarticleone,tourismlatestarticletwo, tourismlatestarticlethree,
      tourismlatestarticlefour,tourismlatestarticlefive,tollywoodtoppostone
      ,tollywoodtopposttwo,tollywoodtoppostthree,tollywoodtoppostfour,
      tollywoodtoppostfive,tollywoodlatestone,tollywoodlatesttwo,
      tollywoodlatestthree, tollywoodlatestfour, tollywoodlatestfive,
      technologytoppostone, technologytopposttwo,technologytoppostthree,
      technologytoppostfour,technologytoppostfive,technologylatestone,
      technologylatesttwo,technologylatestthree,technologylatestfour,
      technologylatestfive,foodtoppostone, foodtopposttwo,foodtoppostthree
      ,foodtoppostfour,foodtoppostfive,foodlatestarticleone,
      foodlatestarticletwo,foodlatestarticlethree,foodlatestarticlefour,
      foodlatestarticlefive]}>
          {props.children}
      </Categorycontext.Provider>
  )
  
}
