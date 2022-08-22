import React from 'react'
import nehru from '../images/zoo/nehru.jpg'
import birsa from '../images/zoo/birsa.jpg'
import tata from '../images/zoo/tata.jpg'
import aquarium from '../images/zoo/aquarium.jpg'

const zoo = () => {
  return (
    <>
    <section className='zmiddle'>
            <div className='zoo1'>
               <div className='heading'>
                   <img src={tata} />
                   <h1>Tata Steel Zoological Park </h1>
               </div>
               <div className='content'>
                Tata Steel Zoological Park is situated in a corner of Jubilee Park, Jamshedpur.
                This zoo is known for its Safari Park, which enables tourists to drive through the
                wooded area, where animals roam freely. Tourists can also visit the Nature Education
                Centre in the zoo, which gives information about the zoo animals. Other things to do in 
                this zoo are to take a boat ride in the Jubilee Lake and walk along the nature Trail.
               </div>
            </div>
            <div className='zoo1'>
               <div className='heading'>
                   <img src={birsa} />
                   <h1>Bhagwan Birsa Biological Park </h1>
               </div>
               <div className='content'>
                 Bhagwan Birsa Biological Park (also known as Ranchi Zoo) is located off [chakla village]Ormanjhi in Ranchi, Jharkhand, India.
                 Ranchi Zoo was established in 1994 at the bank of Getalsud Dam and on the main Patna-Ranchi highway.
                 The park has two divisions the zoological section is dedicated in 83 hectare and botanical section is spread over 21 hectare.
                 The Zoo has a dedicated veterinary doctor and a trained compounder available 24 x 7 to monitor health issues of animals, well established pathology lab for animals is present in the park which includes a separate ward dedicated for complete treatment of animals and emergency ward for rescued animals or newly arrived ones.
                  Zoo also offers Battery Operated Vehicles and Boating facility to visitors including other facilities like Drinking water, Rest Area with Sheds at regular interval, First Aid Box, Wheel Chair for Physical Challenged person, Toilets and Lavatories, Direction Map and Sign Board for navigation, Information Center for visitors, Kiosks, Service, Guide Map and Canteen Facility.
               </div>
            </div>
            <div className='zoo1'>
               <div className='heading'>
                   <img src={nehru} />
                   <h1>Jawaharlal Nehru Biological Park</h1>
               </div>
               <div className='content'>
                 Jawaharlal Nehru Biological Park was constructed during the 1980s and modified in 1989. It is named after Pandit Jawaharlal Nehru who served as the first prime minister of India 
                 Jawaharlal Nehru Biological Park or JNB is a zoological garden located in Bokaro Steel City, Jharkhand, India fully owned and managed by Bokaro Steel Plant, Steel Authority of India Limited. This is the largest zoological garden of the state.
                 The zoo has varieties of animals and birds which have been brought from different parts of world. The zoo's attempts to breed white tigers, royal Bengal tigers and Asiatic lions have been successful. There is also facility to boat in an artificial lake.
               </div>
            </div>
            <div className='zoo1'>
               <div className='heading'>
                   <img src={aquarium} />
                   <h1>Ranchi Aquarium(Jharkhand) </h1>
               </div>
               <div className='content'>
                 The Aquarium named as “Ranchi Aquarium” is a freshwater one. This is the largest freshwater aquarium in the country as on today as claimed by the developer agency. The total area of its premises is 3300 square meter and the aquarium buildings covers 936 square meter. There are 58 fish tanks of different sizes and around 1500 beautiful and interesting fishes of nearly 120 species have been kept in these tanks for public exbit.
                 The fishes comprises of herbivores, carnivores, omnivores and scanvenger categories. Many fishes are exotic and have been procured by the developer agency through from Bankok, Malasia, & Singapore. The internal decoration has been done scientifically with sufficient information about fishes. The external decoration is eye catching with paintings, models. Fountains, and picturesque prototype of a beautiful water fall. There is a selfie point inside the aquarium.
                 In Nutshell, the aquarium is highly educative, entertaining, and awe inspiring!.
               </div>
            </div>
      </section>
    </>
  )
}

export default zoo