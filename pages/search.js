import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import { useRouter } from 'next/router';
import InfoCard from '../components/InfoCard';
import Maps from '../components/Maps';

function Search(props) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;
  const { data } = props

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} Guests`}></Header>

      <main className='flex'>
        <section className='flex-grow pt-14 px-6 '>
          <p className='text-xs'>300+ Stays - {range} - {noOfGuest} guests</p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More Filters</p>
          </div>

          <div className='flex flex-col'>
            {data.map((item, idx) => (
              <InfoCard key={idx} img={item.img} location={item.location} title={item.title} star={item.star} description={item.description} price={item.price} total={item.total}></InfoCard>
            ))}
          </div>

        </section>

        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
          <Maps searchResults={data}></Maps>
        </section>
      </main>

      <Footer></Footer>

    </div>
  )
}

export default Search

export async function getServerSideProps() {

  const response = await fetch('https://links.papareact.com/isz');
  const data = await response.json();

  return {
    props: {
      data,
    }
  }
}