import './App.css'
import React from 'react';
import Main from './components/header.jsx'
import Dashboard from './components/dashboard.jsx'
import Footer from './components/footer.jsx'
function App(){
    return(
      <div>
      <Main />
      <Dashboard
      img="imgs/Munnar-Hill-Station-Kerala.jpg"
      id="MUNNER"
      place="kerala"
      location="https://maps.app.goo.gl/E1sPezSa3AyXZdeR6" alt="munner"
      data=" Munnar invites honeymoon couples to spend time amidst tranquil
         and scenic settings. This popular hill station in Kerala also houses
       some romantic hotels and several activities for the newlyweds.
          "/>
            <Dashboard
            img="imgs/Ranikhet-Beautiful-Forest-Veiw.jpg"
            id="RANIKHET"
            place="uttarakhand"
            location="https://maps.app.goo.gl/E1sPezSa3AyXZdeR6" alt="munner"
            data="Built by the British, Ranikhet is a top hill station of India 
which you should visit to admire the 
beauty of topography, flora and fauna of the Himalayas.
"  />
            <Dashboard
            img="imgs/Mirik-Hill-Station.jpg"
            id="mirik"
            place="westbengal"
            location="https://maps.app.goo.gl/rabRXi6scahsmTmt8" alt="munner"
            data="Dharamshala in Himachal Pradesh is home to the holy Dalai Lama.
 Surrounded by the lofty mountains and home to dense deodar and cedar forests, 
this holiday destination
 in Himachal is counted amongst the most popular hill stations in India.
" />
            <Dashboard
            img="imgs/Dharamshala-Himachal.jpg"
            id="DHARAMASHALA"
            place="himachala pradesh"
            location="https://maps.app.goo.gl/H8DJPooXZ36x4zgJA" alt="munner"
            data="A beautiful hill station in West Bengal, Mirik is famous for its
spectacular beauty, easy accessibility and makes for a great 
destination for family holiday in East India.
"
            />
            <Dashboard
            img="imgs/Darjeeling-Hill-Station.jpg"
            id="DARJEELING"
            place="west bengal"
            location="https://maps.app.goo.gl/RtVFU4WJAQ5y7ByRA" alt="munner"
            data="Darjeeling. Fondly referred to as the Queen of the Hills,
 what makes it a best destination for winter vacations is its
 rich natural beauty, the Toy Train (UNESCO World Heritage Site),
 various sightseeing opportunities and colonial era architecture.
"/>
            <Dashboard
            img="imgs/Gulmarg.jpg"
            id="GULMARG"
            place="kashmir"
            location="https://maps.app.goo.gl/EPfJu5k38cCrP11cA"
             data="Gulmarg, also known as the Meadow of Flowers, is nothing less than
 a fairytale land tucked away in the picturesque valley of Kashmir.
 Unarguably amongst the best hill stations to visit in India, 
it is a popular skiing destination 
and is also known for one of the longest cable car projects in Asia.
"/>
            <Dashboard
            img="imgs/Auli-Snow.jpg"
            id="AULI"
            place="uttarakhand"
            location="https://maps.app.goo.gl/2LXEoiBfdqaqNYnx7"
            data=" Auli, it would be gorgeous! This hill station in India is great 
for spending your summer vacation, not just for its beauty, but also
 for the opportunities it provides for adventure-based activities.
" />
            <Dashboard
            img="imgs/Manali-Himachal.jpg"
            id="MANALI"
            place="himachala pradesh"
            location="https://maps.app.goo.gl/XLr5jLsgjcHaB3t7A"
            data="Auli, it would be gorgeous! This hill station in India is great 
for spending your summer vacation, not just for its beauty, but also
 for the opportunities it provides for adventure-based activities.
" />
            <Dashboard
            img="imgs/Meghalaya-Shillong.jpg"
            id="MEGHALAYA"
            place="assam"
            location="https://maps.app.goo.gl/p2EZnjqjqXxe7eW66" 
            data="meghalaya, it would be gorgeous! This hill station in India is great 
for spending your summer vacation, not just for its beauty, but also 
 for the opportunities it provides for adventure-based activities.
"/>
            <Dashboard
            img="imgs/Dalhousie-Himachal.jpg"
            id="DALHOUSEIE"
            place="himachala pradesh"
            location="https://maps.app.goo.gl/HAp9wsYZyG1DcQ3K7"
            data="dalhouseie, it would be gorgeous! This hill station in India is great 
for spending your summer vacation, not just for its beauty, but also 
for the opportunities it provides for adventure-based activities." />
         
       
       <Footer />
      </div>
    )
}

  
export default App;