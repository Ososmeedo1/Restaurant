import React from 'react'
import AboutChef1 from './../../Assets/secondmeal.jpg'
import AboutChef2 from '../../Assets/firstmeal.jpg'
import ImageGallery from '../ImageGallery/ImageGallery.jsx'
import Reviews from '../Reviews/Reviews.jsx'
import {motion} from 'framer-motion'


export default function About() {
  return <>
    <motion.div className="about-page" initial={{x: "-100vw"}} animate={{x: 0}} transition={{duration: .25}}>
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className='text-light'>About</h1>
        </div>
      </header>

      <div className="container my-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at! Dolorum hic quod facere, ipsa temporibus voluptas illum odio itaque. Voluptatem, omnis tempora error reiciendis vero delectus voluptates ratione numquam et quidem quasi eaque maxime nostrum consectetur natus porro! Ipsa maxime voluptatibus quidem impedit reprehenderit iure nisi natus quis tempore?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores deserunt, a magni ex tempora quasi! Omnis commodi dicta ullam enim laborum eum ipsam vel itaque incidunt similique earum architecto quo harum hic, eius, voluptatibus, cumque accusantium quam illum error tempora quia repellendus? Porro sunt recusandae, consectetur non quasi iure.</p>
        <div className="row">
          <div className="col-lg-6">
            <img src={AboutChef1} className='img-fluid my-4' alt="" />
          </div>
          <div className="col-lg-6">
            <img src={AboutChef2} className='img-fluid my-4' alt="" />
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, asperiores delectus fugit totam nam possimus nostrum dolorem, veritatis saepe magnam similique, eaque ex vero. Repellendus, consectetur minima quos dolores delectus, aliquid excepturi minus quibusdam ab aut neque doloremque nihil incidunt doloribus numquam molestias temporibus inventore iste quisquam voluptatum placeat ex. Voluptatum, odio? Vero officiis culpa quis quo quos, ducimus molestias dolores sed quas! Reiciendis aliquid assumenda sint rerum minus atque soluta itaque magnam nulla sapiente ullam magni, laborum vitae dolorum illum doloremque laboriosam porro repellat pariatur. Provident rerum iusto cumque.</p>

        </div>
        <div className="bg-dark text-light">
          <ImageGallery/>
        </div>

        <div className="my-5">
          <Reviews/>
        </div>
      </div>
    </motion.div>
  </>
}
