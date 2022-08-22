import React from 'react'
import belta from '../images/park/belta.jpg'
import hazzaribagh from '../images/park/hazzaribagh.jpg'
import palamu from '../images/park/palamu.jpg'
import wolf from '../images/park/wolf.jpeg'
const park = () => {
  return (
    <>
      <section className='pmiddle'>
            <div className='park1'>
               <div className='heading'>
                   <img src={belta} />
                   <h1>Betla National Park </h1>
               </div>
               <div className='content'>
                  The park has a variety of diverse eco-systems and abundance of wild animals. Elephants in large numbers are seen mostly between the end of the monsoon season, to the time when water holes begin to dry in March.
                  Predators include the sloth bear and panther, while scavengers include the wolf, jackal and hyena. Other animals include large herds of gaur and chital, large families of langurs, rhesus monkeys, Indian giant squirrels, mouse deer, sambhar deer, four-horned antelopes, nilgai, kakar, small Indian civets, ant eating pangolin, porcupine and mongoose. White tigers that remained in the park were transported to zoos.
                  Birds include the hornbill, peafowl, red jungle fowl, black partridge, white-necked stork, black ibis, swamp grey, quail, pied hornbill, wagtail, harial, dove, drongo, crested serpent-eagle, forest owlet, papeeha, and other birds usually found in dry deciduous forests. The Kamaldah lake attracts several varieties of water birds including the common whistling, cotton teal, knob-billed duck, snipe and geese.
               </div>
            </div>
            <div className='park1'>
               <div className='heading'>
                   <img src={hazzaribagh} />
                   <h1>Hazaribagh Wildlife Sanctuary</h1>
               </div>
               <div className='content'>
                 Hazaribagh Wildlife Sanctuary (earlier called Hazaribagh National Park) is a wildlife sanctuary in Jharkhand, India, about 55 miles (89 km) north of Ranchi. It was established in 1955. Nestling in low hilly terrain, at an average altitude of 615 metres (2,018 ft), it has an area of 184 km2 (71 sq mi) and is home to sambar, nilgai, chital, peafowl, sloth bears, black bears, hyenas and pigeons.
                 Earlier it was home to tigers, leopards, and many more animals but now rarely animals other than nilgai and hyena are seen. It is known that many foreigners also used to visit the then-called National Park, but due to lack of care by government, it has become mere a forest. Very few tourists can be seen now. Hazaribagh, which was known as a tourist destination, is now losing its title.
               </div>
            </div>
            <div className='park1'>
               <div className='heading'>
                   <img src={palamu} />
                   <h1>The Palamau Tiger Reserve </h1>
               </div>
               <div className='content'>
                 The Palamau Tiger Reserve is one of the nine original tiger reserves in Jharkhand, India and the only one in this state. It forms part of Betla National Park and Palamau Wildlife Sanctuary. As of 2022, the reserve is reported to be largely under Naxal control.
                 The tiger reserve has a total area of 1,129.93 square kilometres (436 sq mi) with a core area of 414.93 km2 and a buffer area of 650 km2.
                 Ramandag, Latoo and Kujurum forest villages are in the core area. Most of the villages are small; one village, Meral, consisted in 1993 of just 99 acres (400,000 m2) of land, 9 families and 78 people.[2] In 1993 there were 45 villages in the buffer area and about 60 more in the periphery of the reserve.
                 As of 2012, that number had grown to 136 villages that fall under the "buffer area" regulations of the Palamu Tiger Reserve.
               </div>
            </div>
            <div className='park1'>
               <div className='heading'>
                   <img src={wolf} />
                   <h1>Mahuadanr Wolf Sanctuary, The Only Wolf Sanctuary In India</h1>
               </div>
               <div className='content'>
                 Indian Wolf is a subspecies of the grey wolf almost similar in structure and size to the Himalayan wolf and the Arabian wolf without the thick and healthy winter coat as it resides in the warmer region of the Indian subcontinent.
                 Wolf are exotic animals found in the Indian states of Jharkhand, Gujarat, Rajasthan, Uttar Pradesh, Madhya Pradesh, Maharashtra, Karnataka, and Andhra Pradesh. However, nowadays its really hard to spot a wolf roaming freely as most of them are kept in different sanctuaries across the country.
                 In India, there are almost 11 sanctuaries where you can spot a wild Indian wolf but Mahudanr Wolf Sanctuary in the Indian state of Jharkhand is the lone sanctuary in the country that is specially dedicated to Indian wolves.
               </div>
            </div>
      </section>
    </>
  )
}

export default park 