import React, { createContext } from "react";

export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {
    const articledata = [

        {
            id: "1",
            title: "KERALA",
            img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            likesone: "25k",
            info: "National Geographic's Traveller magazine listed Kerala in the 'Ten Paradises of the World' and '50 must visit places of a lifetime'. Being a coastal region rich in greenery and with a unique culture, the state has attracted tourists from across the globe since time immemorial. But more often than not, tourists are finding themselves grappling with situations wherein they are unable to choose their destinations or struggle to get proper accommodation owing to shortage of local information and such other hassles.Known for the scenic beauty, natural beauty and other attractions, Kerala tourism never had to look back ever in its growth. Kerala is known for its densely forested mountain ranges comprising the Western Ghats and covering tropical evergreen, deciduous and semi-deciduous jungles that are home to some rare, exotic plant life and wildlife species. These hill stations and high range zones are the favourite haunts of nature and wildlife enthusiasts.",
            category: "Tourism"

        },
        {
            id: "2",
            title: "KODAIKANAL",
            img: "https://4.imimg.com/data4/WW/WW/GLADMIN-/wp-content-plugins-blank-uploads-gnw7rayjt4gsgkgk8k-500x500.jpg",
            likesone: "35k",
            info: " Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means 'the gift of the forests'. Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real. Kodaikanal is a place you can go to take a break from the rigours of daily city life, and this hill station lets you sit back and connect with nature as you head out on biking or trekking trails or take a stroll through the vast forests surrounding the town.",
            category: "Tourism"

        },
        {
            id: "3",
            title: "Jammu And Kashmir",
            img: "https://www.nativeplanet.com/img/2020/01/cover-1579609724.jpg",
            likesone: "45k",
            info: " Known as Heaven on the Earth, Jammu & Kashmir is where Mother Nature has bestowed all her love. Enclosed by the Himalayas and Karakoram ranges; and festooned with verdant meadows, lush valleys, dense forests, splendid temples, this new union territory of India is a holiday destination to instantly fall in love with. Being an ideal tourist destination for family tours, honeymoon tours and the perfect place for adventure enthusiasts, Jammu & Kashmir offers abundance tour options for travellers of all kind.Srinagar, the summer capital of Jammu and Kashmir, lies in the Kashmir Valley along the banks of the Jhelum River, and all-round Srinagar you will be stupefied by its natural beauty, its abundant gardens, houseboats and waterfronts.",
            category: "Tourism"

        },
        {
            id: "4",
            title: "Shimla",
            img: "https://media.istockphoto.com/photos/the-kalka-to-shimla-railway-is-a-2-ft-6-in-narrowgauge-railway-in-picture-id1223612773?k=20&m=1223612773&s=612x612&w=0&h=BXBnyuqTtsyi-Y9tQP1OUSJ1l3Ce1bqIHhQjHwvHOdE=",
            likesone: "55k",
            info: "   Also known as the ‘Queen of Hills’, Shimla is a picturesque hill town nestled at an altitude of 2205 metres in the enchanting state of Himachal Pradesh. Enveloped in a pristine scenery of majestic Himalayan peaks and mystical forests of oak and pine, it has always been on the radar of travellers from all walks of life. Whether on a honeymoon, a cultural escapade or simply a relaxing holiday, Shimla is sure to leave you with some unforgettable memories to cherish for life.",
            category: "Tourism"

        },
        {
            id: "5",
            title: "Goa",
            img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            likesone: "15k",
            info: "    Goa is India’s smallest state by its geographical area and the fourth smallest by population. The state has been a very important historical and cultural centre since ancient times. In a Hindu scripture Mahabharata it is referred as Gopakpattan or Gomant and in Sutra- Samhita it was mentioned as Govapuri. Located on India’s West coast, Goa is a former Portuguese colony with prolific history. The state has unique blend of Indian and Portuguese culture, art and architecture that pulls approx 2.5 millions (wiki) tourists every year. And hence Goa is visibly different from the rest of India.The magical land of Goa is a land of celebrations and festivities. Snuggled in the Konkan Coast Belt, It has a long coastline of approx 100 kilometers. Goa is primarily known for its beautiful beaches which are engrossed with oscillating palm trees and an astonishing nightlife. It is a wonderful place embraced by joy & happiness only. However, apart from beaches there is much more in Goa.",
            category: "Tourism"

        },
        {
            id: "6",
            title: "AEROBIC",
            img: "https://media.istockphoto.com/photos/unrecognizable-sportswoman-jumping-rope-on-a-bridge-picture-id1128646064?b=1&k=20&m=1128646064&s=170667a&w=0&h=laGklQ5LOZMQXFr_ydlDQqK5yRAerjh6AtC3fsaZZ8w=",
            likesone: "10k",
            info: "     Aerobic exercise is any type of cardiovascular conditioning. It can include activities like brisk walking, swimming, running, or cycling. You probably know it as “cardio.” By definition, aerobic exercise means “with oxygen.” Your breathing and heart rate will increase during aerobic activities. Aerobic exercise helps keep your heart, lungs, and circulatory system healthy. Aerobic exercise differs from anaerobic exercise. Anaerobic exercises, such as weightlifting or sprinting, involve quick bursts of energy. They’re performed at maximum effort for a short time. This is unlike aerobic exercises. You perform aerobic exercises for a sustained period of time. Read on to learn more about aerobic exercises you can try at home and at the gym. And remember, always talk to your doctor before beginning a new aerobic exercise routine.",
            category: "Fitness"

        },
        {
            id: "7",
            title: "FLEXIBILITY",
            img: "https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/830bb47e9d6dca4026ab8eba425e4945bb55/i1080x475.jpg",
            likesone: "13k",
            info: "     Flexibility training is stretching—lengthening and loosening muscles and connective tissues to improve flexibility. You probably know what it means when someone says they are flexible. It usually means that they can reach down and touch their toes or bend deeply into a squat. But the definition of flexibility is more complicated than simply being able to do a single stretch. True flexibility is the ability to move through a range of motion without pain.That means that each joint and each group of muscles in your body might have a different range of motion (ROM) or a different level of flexibility. Range of motion is a measurement of how much a joint can move, both in terms of distance and direction. Along with other factors, your muscles' ability to relax or contract affects your range of motion. If your muscles are inflexible, then your range of motion could be less than it should be.",
            category: "Fitness"

        },
        {
            id: "8",
            title: "SPRINT",
            img: "https://www.mensjournal.com/wp-content/uploads/mf/1280-run-track-sprint-shuttle.jpg?w=900&h=506&crop=1&quality=86&strip=all",
            likesone: "19k",
            info: "     If you want an efficient way to burn calories, increase your cardiovascular and muscular endurance, and take your physical fitness to the next level, then consider adding sprints and intervals to your workout routine. Sprint workouts are a great addition to a cardio or resistance training session. You can customize them based on time, fitness level, intensity, and the space you have available for exercise.To help get you started, here are some tips and examples of beginner and intermediate to advanced level sprint workouts.",
            category: "Fitness"

        },
        {
            id: "9",
            title: "MUSCULAR STRENGTH",
            img: "https://www.verywellfit.com/thmb/xVLTx6KUBTuPDGbkgqXhehUWP68=/2122x1415/filters:fill(FFDB5D,1)/GettyImages-485244797-566eae435f9b583dc376e6ec.jpg",
            likesone: "21k",
            info: "      Muscular strength relates to your ability to move and lift objects. It’s measured by how much force you can exert and how much weight you can lift for a short period of time.Examples of exercises that develop muscular strength and power include resistance training, such as weightlifting, bodyweight exercises, and resistance band exercises. Running, cycling, and climbing hills are also options.Read on to learn more about the difference between muscular strength and muscular endurance, as well as muscular strength benefits, cautions, and exercises.",
            category: "Fitness"

        },
        {
            id: "10",
            title: "BALANCE",
            img: "https://c0.wallpaperflare.com/preview/719/689/312/fitness-sports-gym-exercise.jpg",
            likesone: "31k",
            info: "  Though it might not cross your mind, you need good balance to do just about everything, including walking, getting out of a chair, and leaning over to tie your shoes. Strong muscles and being able to keep yourself steady make all the difference in those and many other things you do every day. Balance training involves doing exercises that strengthen the muscles that help keep you upright, including your legs and core. These kinds of exercises can improve stability and help prevent falls.Doing balance exercises can be intense, like some very challenging yoga poses. Others are as simple as standing on one leg for a few seconds. Or you can use equipment that forces your body to stabilize itself, like a Bosu half-circle stability ball or a balance board you use along with a video game.   ",
            category: "Fitness"

        },
        {
            id: "11",
            title: "RADHESHYAM",
            img: "https://static.toiimg.com/photo/msid-88312302/88312302.jpg?61214",
            likesone: "601k",
            info: " A romantic drama set in Europe during the 1970s.Radhe Shyam is a period romance that has been written and directed by Radha Krishna Kumar. The story of the film is set in the Europe of the 1970s and it has been simultaneously shot in Telugu and Hindi. Radhe Shyam has been produced under the banners of T-Series and UV Creations and the Hindi version is distributed by AA Films. It stars Pooja Hegde as Prerana, Prabhas as Vikramaditya and Krishnam Raju as Paramahamsa alongside Sachin Khedekar, Murali Sharma, Bhagyashree, Kunaal Roy Kapur, Priyadarshi, Sasha Chettri and Sathyan Sivakumar as supporting characters.",
            category: "Tollywood"

        },
        {
            id: "12",
            title: "RRR",
            img: "https://w0.peakpx.com/wallpaper/830/395/HD-wallpaper-rrr-movie-rrr.jpg",
            likesone: "3001k",
            info: "  A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920's.S.S. Rajamouli of Baahubali fame directs this Telugu action period drama that follows two fictitious revolutionaries in the 1920s who fought against the British Raj and the Nizams of Hyderabad. Reportedly one of the most expensive Indian films of all time.",
            category: "Tollywood"

        },
        {
            id: "13",
            title: "PUSHPA",
            img: "https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg",
            likesone: "700k",
            info: " With Pushpa: The Rise, Sukumar ventures into unchartered territory by making a rustic masala film filled with punch dialogues, characters that speak in a Chittoor dialect and a story that’s rooted deep in the region it’s set in. And seeing as how expectations were sky-high after Rangasthalam, what he delivers turns out to be a mixed bag that's over-long, falters at times and delivers what it promises at others.",
            category: "Tollywood"

        },
        {
            id: "14",
            title: "BHEEMLA NAYAK",
            img: "https://cdn.gulte.com/wp-content/uploads/2022/02/Bheemla-Nayak-4.jpg",
            likesone: "500k",
            info: "   Bheemla Nayak is a ultra action entertainer directed by Saagar K Chandra. The movie casts Pawan Kalyan in the lead role. The Music composed by Thaman S while cinematography done by Prasad Murella and it is edited by Navin Nooli. The film is produced by Suryadevara Naga Vamsi under Sithara Entertainments banner.Danny aka Daniel Shekar (Rana Daggubati) is a retired havildar from the Indian army who in on his way to meet his friend. He is caught red-handed by the police and excise department for carrying liquor since that area is a prohibited zone. While Danny tries to escape the charges using his money and influence, Bheemla Nayak (Pawan Kalyan) the efficient police officer who is popular for his strong morals and values, registers his arrest.  This incident bruises the giant-sized ego of Danny who plans to avenge his insult. This results in the never-ending rivalry between Bhemmla Nayak and Danny.",
            category: "Tollywood"

        },
        {
            id: "15",
            title: "SALAAR",
            img: "https://static.toiimg.com/photo/msid-86503385/86503385.jpg?54616",
            likesone: "4000k",
            info: "  Salaar is a action thriller movie directed by Prashanth Neel. The movie casts Prabhas and Shruti Haasan are in the lead roles. The Music composed by Ravi Basrur while cinematography done by Bhuvan Gowda. The film is produced by Vijay Kiragandur under Hombale Films banner.Salaar is a Pan India movie releasing in various languages.",
            category: "Tollywood"

        },
        {
            id: "16",
            title: "CYBER SECURITY",
            img: "https://www.financialexpress.com/wp-content/uploads/2021/08/cyber-security.jpg",
            likesone: "13k",
            info: "   Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.Implementing effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming more innovative.With an increasing number of users, devices and programs in the modern enterprise, combined with the increased deluge of data -- much of which is sensitive or confidential -- the importance of cybersecurity continues to grow. The growing volume and sophistication of cyber attackers and attack techniques compound the problem even further.",
            category: "Technology"

        },
        {
            id: "17",
            title: "ARTIFICIAL INTELLIGENCE",
            img: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg",
            likesone: "7k",
            info: "   Less than a decade after breaking the Nazi encryption machine Enigma and helping the Allied Forces win World War II, mathematician Alan Turing changed history a second time with a simple question: Can machines think?  Turing's paper Computing Machinery and Intelligence(1950), and its subsequent Turing Test, established the fundamental goal and vision of artificial intelligence.   At its core, AI is the branch of computer science that aims to answer Turing's question in the affirmative. It is the endeavor to replicate or simulate human intelligence in machines.The expansive goal of artificial intelligence has given rise to many questions and debates. So much so, that no singular definition of the field is universally accepted.  ",
            category: "Technology"

        },
        {
            id: "18",
            title: "BLOCK CHAIN TECHNOLOGY",
            img: "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
            likesone: "2k",
            info: "   Blockchain, sometimes referred to as Distributed Ledger Technology (DLT), makes the history of any digital asset unalterable and transparent through the use of decentralization and cryptographic hashing.   A simple analogy for understanding blockchain technology is a Google Doc. When we create a document and share it with a group of people, the document is distributed instead of copied or transferred. This creates a decentralized distribution chain that gives everyone access to the document at the same time. No one is locked out awaiting changes from another party, while all modifications to the doc are being recorded in real-time, making changes completely transparent.",
            category: "Technology"

        },
        {
            id: "19",
            title: "CRYPTOGRAPHY",
            img: "https://i.ytimg.com/vi/cqgtdkURzTE/maxresdefault.jpg",
            likesone: "2.5k",
            info: "   Cryptography is technique of securing information and communications through use of codes so that only those person for whom the information is intended can understand it and process it. Thus preventing unauthorized access to information. The prefix “crypt” means “hidden” and suffix graphy means “writing”.In Cryptography the techniques which are use to protect information are obtained from mathematical concepts and a set of rule based calculations known as algorithms to convert messages in ways that make it hard to decode it. These algorithms are used for cryptographic key generation, digital signing, verification to protect data privacy, web browsing on internet and to protect confidential transactions such as credit card and debit card transactions.Techniques used For Cryptography:In today’s age of computers cryptography is often associated with the process where an ordinary plain text is converted to cipher text which is the text made such that intended receiver of the text can only decode it and hence this process is known as encryption. The process of conversion of cipher text to plain text this is known as decryption.",
            category: "Technology"

        },
        {
            id: "20",
            title: "INTERNET OF THINGS",
            img: "https://imageio.forbes.com/specials-images/imageserve/5f965d43ac32303829f68758/The-5-Biggest-Internet-Of-Things--IoT--Trends-In-2021-Everyone-Must-Get-Ready-For-Now/960x0.jpg?fit=bounds&format=jpg&width=960",
            likesone: "4.5k",
            info: " The Internet of Things, or IoT, refers to the billions of physical devices around the world that are now connected to the internet, all collecting and sharing data. Thanks to the arrival of super-cheap computer chips and the ubiquity of wireless networks, it's possible to turn anything, from something as small as a pill to something as big as an aeroplane, into a part of the IoT. Connecting up all these different objects and adding sensors to them adds a level of digital intelligence to devices that would be otherwise dumb, enabling them to communicate real-time data without involving a human being. The Internet of Things is making the fabric of the world around us more smarter and more responsive, merging the digital and physical universes.",
            category: "Technology"

        },

        {
            id: "21",
            title: "Paneer Butter Masala",
            img: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1",
            likesone: "75k",
            info: "  This Paneer Butter Masala recipe is a rich and creamy dish of paneer (cottage cheese) in a tomato, butter and cashew sauce (known as Makhani gravy).To make this paneer butter masala recipe, we start with boiling the tomatoes, onion, cashews, ginger and garlic.This forms the base sauce. Once the ingredients are boiled, they are pureed and then rest of the ingredients (including paneer) are added to the dish.A lot of people use only tomatoes for making paneer butter masala or paneer makhani. You can do the same if you like.I like adding some white/sweet onions to my curry for the extra flavor but it will taste just as good with the tomatoes too.Remember to not use red onions here. A lot of times they have a very strong flavor and that will affect the final taste of the dish.So, stick to the white or sweet onions for this dish.",
            category: "Food"

        },
      
        {
            id: "22",
            title: "RAJMA MASALA",
            img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/rajma-recipe.jpg",
            likesone: "85k",
            info: "This rajma recipe follows the traditional (and the most common method) of making rajma curry. So long as you follow the recipe, there’s no chance anything will go wrong with this simple and delectable dish. In this easy rajma recipe, the kidney beans are cooked first and are later added to a sautéed base of spices, onions and tomatoes. I prefer working with dried rajma beans because they are both cheaper than canned and give me the opportunity to cook and season them to my liking.Moreover I always prefer and recommend to use fresh ingredients for a healthy living. That said, you can also make this recipe using canned beans as a time saver!The aromatic and flavorful masala base is cooked down to a beautiful gravy consistency by adding some water, and then is finished off with some cream. Adding cream makes for a truly restaurant-style rajma that is decadent enough for company.Rajma masala is usually a weekend affair that is perfect for a Sunday lunch at home. When I make this filling recipe I stay true to the Punjabi style and don’t bother with any other side dishes.",
            category: "Food"

        },
        {
            id: "23",
            title: "PALAK PANEER",
            img: "https://images.hindustantimes.com/img/2021/11/26/1600x900/palak_paneer_thumb_1637919968696_1637919979983.jpg",
            likesone: "35k",
            info: " Paneer (Indian cottage cheese) is cooked with spinach and spices in this creamy and flavorful curry.It pairs well with naan, paratha or jeera rice.. It uses basic spices and simple ingredients. For the curry, I first blanch the spinach and then puree it.Once the spinach is boiled, add it to ice cold water. This helps in retaining the color of the spinach.The curry is made of the spinach puree, tomato, onion, ginger and garlic. I use lot of garlic because in my opinion spinach and garlic go really well together.However, if you are not a fan, you may cut down on it or skip it altogether. Also, you can skip the tomatoes if you want.  It will still come out great!I often use my homemade paneer for this palak paneer recipe. It’s really the best.",
            category: "Food"

        },
        {
            id: "24",
            title: "MASALA DOSA",
            img: "http://www.yummyfoodrecipes.in/resources/picture/org/Karnataka-Style-Masala-Dosa.jpg",
            likesone: "46k",
            info: " Masala dosa are crispy, soft, savory and healthy crepes made with a rice and lentil batter. The dosa are gluten-free and dairy-free, with a sturdy yet soft texture that’s great for holding a hearty homemade potato filling.To make the batter, lentils and rice are soaked for several hours and then blended together. This makes a creamy and smooth batter. This rice and lentil batter is fermented overnight to create just the right tangy flavor and tender, light crepes.Dosa Batter is quickly cooked like a thin pancake on a hot griddle, with your choice of oil or butter or ghee. The crepe is then filled with a spiced potato and onion filling, and served with Sambar and Coconut Chutney.You can easily customize this recipe to fit your tastes by adding grated paneer, cheese, extra veggies (like peas, carrots, cauliflower, and/or green beans) to the potato filling, and serving with other favorite dipping sauces or side dishes.",
            category: "Food"

        },
        {
            id: "25",
            title: "PONGAL",
            img: "https://www.vegrecipesofindia.com/wp-content/uploads/2019/01/ven-pongal-recipe-1a.jpg",
            likesone: "96k",
            info: "         Pongal is a popular recipe having both savory and sweet versions. It is made during the popular Pongal Festival or other Hindu festivals in South India and is offered to the deities as naivedyam (offerings of food).Pongal Dish is made of rice mixed with moong dal, ghee, cashew nuts, raisins, and mild spices. The spicy variety consists of moong dal, rice, cashews, curry leaves,pepper and ghee. The ingredients are good for winter and is made of the right balance of carbohydrate, protein and fats.",
            category: "Food"

        },









    ]

    return (
        <>
            <ArticleContext.Provider value={[articledata]}>
                {props.children}
            </ArticleContext.Provider>
        </>
    )

}

export default ArticleContextProvider