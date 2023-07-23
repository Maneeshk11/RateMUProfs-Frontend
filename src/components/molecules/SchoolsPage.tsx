import SchoolItem from "../atoms/schoolItem"

const SchoolsPage = () => {
    const escoePara = "Mahindra University École Centrale School of Engineering (MU) is a prestigious engineering college in India, founded through a collaboration between the Mahindra Group and École Centrale Paris. With the Mahindra Group's expertise in engineering and technology, and École Centrale Paris' rich legacy and influential alumni, MU aims to establish itself as one of the top engineering institutions in India and globally."
    const somPara = "Mahindra University's School of Management aims to become a cutting-edge business school, focusing on excellence in both undergraduate and post-graduate education."
    const solPara = "The School of Law, Mahindra University in Hyderabad, established in September 2021, is dedicated to promoting justice, equality, and service to all sections of society by providing a platform for students and people to understand the significance of law and contribute to the development of a fair and civilized society."
    const imsoePara = "The Indira Mahindra School of Education (IMSE) at Mahindra University is a cutting-edge, interdisciplinary institution dedicated to producing the next generation of highly skilled educators and school leaders, emphasizing foundational pedagogical concepts, moral values, and ethical considerations for transforming education at all levels."
    return (
        <div className="px-8 flex flex-col items-center">
            <div className="mb-14 mt-2 w-full border-b-[2px] border-[#ffc1c15b] bg-[#fff1f155] h-[12rem] flex items-center justify-center">
                <text className="text-red-700 text-4xl font-bold">Schools of Mahindra University</text>
            </div>

            <div className="w-[70%]">
                <SchoolItem schoolName="École Centrale School of Engineering"
                    schoolDescription={escoePara}></SchoolItem>
                <SchoolItem schoolName="School of Law"
                schoolDescription={solPara}></SchoolItem>
                <SchoolItem schoolName="School of Management"
                    schoolDescription={somPara}></SchoolItem>
                <SchoolItem schoolName="Indira Mahindra School of Education"
                    schoolDescription={imsoePara}></SchoolItem>
            </div>
        </div>
    )
}

export default SchoolsPage