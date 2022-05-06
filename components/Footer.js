import React from 'react'

function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold block'>Support</h5>
                <a className='hover:underline cursor-pointer block'>Help Centre</a>
                <a className='hover:underline cursor-pointer block'>Safety Information</a>
                <a className='hover:underline cursor-pointer block'>Supporting people with disabilities</a>
                <a className='hover:underline cursor-pointer block'>Cancellation options</a>
                <a className='hover:underline cursor-pointer block'>Our COVID-19 Response</a>
                <a className='hover:underline cursor-pointer block'>Report a neighbourhood concern</a>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>Community</h5>
                <a className='hover:underline cursor-pointer block'>Airbnb.org: disaster relief housing</a>
                <a className='hover:underline cursor-pointer block'>Combating discrimination</a>
                <a className='hover:underline cursor-pointer block'>Support Afghan refugees</a>
            </div>

            <div className='space-y-4 text-xs text-gray-800 '>
                <h5 className='font-bold'>Hosting</h5>
                <a className='hover:underline cursor-pointer block'>Try hosting</a>
                <a className='hover:underline cursor-pointer block'>AirCover for Hosts</a>
                <a className='hover:underline cursor-pointer block'>Explore hosting resources</a>
                <a className='hover:underline cursor-pointer block'>Visit our community forum</a>
                <a className='hover:underline cursor-pointer block'>How to host responsibly</a>
            </div>

            <div className='space-y-4 text-xs text-gray-800 '>
                <h5 className='font-bold'>About</h5>
                <a className='hover:underline cursor-pointer block'>Newsroom</a>
                <a className='hover:underline cursor-pointer block'>Learn about new features</a>
                <a className='hover:underline cursor-pointer block'>Letter from our founders</a>
                <a className='hover:underline cursor-pointer block'>Careers</a>
                <a className='hover:underline cursor-pointer block'>Investors</a>
            </div>
            
        </div>

    )
}

export default Footer