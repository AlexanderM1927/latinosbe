import Job from '@components/Job'
import React from 'react'

export async function getServerSideProps(ctx) {
    // Fetch data from external API
    const { id } = ctx.query
    const res = await fetch(`http://localhost:3000/api/job/${id}`)
    let job = await res.json()

    if (!job) job = {}
  
    // Pass job to the page via props
    return { props: { job } }
}

const Jobs = ({ job }) => {


    return (
        <div className='page-content main-container'>
            <div className='box'>
                <h2>{ job.title }</h2>
                <b>Published at:</b> { job.date }<br />
                <p>
                    <h4>Content:</h4>
                    { job.content }
                </p>
                <hr></hr>
                <b>Location:</b> { job.location }<br />
                <b>Contact:</b> <a href={`mailto:${job.contact}?Subject=Apply%20Job%20${encodeURI(job.title)}`}>{ job.contact }</a><br />
            </div>
        </div>
    )
}


export default Jobs