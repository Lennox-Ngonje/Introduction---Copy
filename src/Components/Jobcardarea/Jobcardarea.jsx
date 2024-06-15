import React from 'react'
import Jobcard from '../Jobcard/Jobcard'

const Jobcardarea = () => {
    const jobcardarea = [
        {
            id:1,
            time: "Full-Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K-80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae repellendus, nostrum ea modi culpa vero suscipit cupiditate fuga obcaecati id, quisquam totam. Tempora non, ex est beatae quam sit."
        },
        {
            id:2,
            time: "Full-Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K-80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae repellendus, nostrum ea modi culpa vero suscipit cupiditate fuga obcaecati id, quisquam totam. Tempora non, ex est beatae quam sit."
        },
        {
            id:3,
            time: "Full-Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K-80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae repellendus, nostrum ea modi culpa vero suscipit cupiditate fuga obcaecati id, quisquam totam. Tempora non, ex est beatae quam sit."
        },
        {
            id:4,
            time: "Full-Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K-80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae repellendus, nostrum ea modi culpa vero suscipit cupiditate fuga obcaecati id, quisquam totam. Tempora non, ex est beatae quam sit."
        },
        {
            id:5,
            time: "Full-Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K-80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae repellendus, nostrum ea modi culpa vero suscipit cupiditate fuga obcaecati id, quisquam totam. Tempora non, ex est beatae quam sit."
        },
        {
            id:6,
            time: "Full-Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K-80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae repellendus, nostrum ea modi culpa vero suscipit cupiditate fuga obcaecati id, quisquam totam. Tempora non, ex est beatae quam sit."
        },
        {
            id:7,
            time: "Full-Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K-80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae repellendus, nostrum ea modi culpa vero suscipit cupiditate fuga obcaecati id, quisquam totam. Tempora non, ex est beatae quam sit."
        },
        {
            id:8,
            time: "Full-Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K-80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repudiandae repellendus, nostrum ea modi culpa vero suscipit cupiditate fuga obcaecati id, quisquam totam. Tempora non, ex est beatae quam sit."
        },
    ]
  return (
    <div>
        <h2>Recent Job</h2>

        <div className="cardsarea">
            {
                jobcardarea.map((data) =>(
                    <Jobcard key={data.id} time={data.time} position={data.position} description={data.description} salary={data.salary} location={data.location} />
                ) )

                
            }
        </div>
    </div>
  )
}

export default Jobcardarea