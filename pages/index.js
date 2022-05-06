import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';


export default function Home(props) {

  const { smallCardDataJson, mediumCardDataJson } = props;

  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header></Header>
      <Banner></Banner>


      <main className='max-w-7xl mx-auto px-8 sm:px-16 '>

        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5 '>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              smallCardDataJson?.map((data, idx) => {
                return <SmallCard img={data.img} location={data.location} distance={data.distance} key={idx}></SmallCard>
              })
            }
          </div>

        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8 '>Live Anywhere</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {
              mediumCardDataJson?.map((data, idx) => {
                return <MediumCard key={idx} img={data.img} title={data.title}></MediumCard>
              })
            }
          </div>
        </section>

          <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outdoors' description='Whitelist curated by Airbnb.' buttonText='Get Inspired'></LargeCard>

      </main>

      <Footer></Footer>

    </div>
  )
}

export async function getStaticProps() {
  const smallCardData = await fetch('https://links.papareact.com/pyp');
  const smallCardDataJson = await smallCardData.json();

  const mediumCardData = await fetch('https://links.papareact.com/zp1');
  const mediumCardDataJson = await mediumCardData.json();

  return {
    props: {
      smallCardDataJson: smallCardDataJson,
      mediumCardDataJson: mediumCardDataJson
    }
  }
}
