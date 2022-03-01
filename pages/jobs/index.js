import Job from '@components/Job'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/jobs`)
    let jobs = await res.json()

    if (!jobs) jobs = []
  
    // Pass jobs to the page via props
    return { props: { jobs } }
}

const Jobs = ({ jobs }) => {


    return (
        <div className='page-content main-container'>
            <div className='box jobs'>
                <h2>Jobs <span><FontAwesomeIcon icon={faPlus} /></span></h2>
                <div>
                    <div className='row'>
                        {jobs.map(item =>
                            <div className='col-md-4 col-xs-12'>
                                <Link href={`/job/${item.id}`}>
                                    <a className='text-d-none color-black'><Job object={item}></Job></a>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Jobs