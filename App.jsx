import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const navlist = [
    { href: '#home', label: 'home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#tips', label: 'tips' },
    { href: '#book', label: 'Appointment' },
  ];

  return (
    <>
      <h2 className="text-4xl font-bold capitalize mb-8">Our Services</h2>
      <section className="grid grid-cols-3 md:grid-cols-3 gap-6 px-10 justify-items-center">

        {/* my first card */}
        <section className="py-5">
          <section className="rounded overflow-hidden shaddow-lg text-4xl font-bold max-w-sm ">

            Dental-Care
           
            <img
              src="https://media.istockphoto.com/id/2212412570/photo/smiling-dentist-treating-patient-in-bright-dental-office.jpg?s=612x612&w=0&k=20&c=TFrixjU73kNhx_crnXlzPg9EBw_VktqaUW1LOpcJrsc="
              alt="dental care"
              className="w-full h-60"
            />
            
             
          </section>
        </section>


        {/* Card2 */}
        <section className="py-5">
          <section className="rounded overflow-hidden shaddow-lg text-4xl font-bold max-w-sm">

            Teeth-Clean
            <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyG6P1Z73HyG7DQQh3XdxB_mE1cVoYi7yc_pJkicyFAyrGu0gdiarqnnTSEL2qjI9r-o&usqp=CAU"
              alt="Teeth-clean"
              className="w-full h-60"
            />

          </section>
        </section>
         {/* card 3 */}
        <section className="py-5">
          <section className="rounded overflow-hidden shaddow-lg text-4xl font-bold max-w-sm ">

            Orthodontics
           
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS30ikqBl5EpvJDcPiiJk7YM88EXyB5z7lUZw&s"
              alt="Orthodontics"
              className="w-full h-60"
            />

          </section>
        </section>

      </section>
    </>



  )
}

export default App