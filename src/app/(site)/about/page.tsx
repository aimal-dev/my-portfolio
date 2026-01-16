import { getExperience, getEducation, getAbout, getCertificates } from "@/lib/actions";
import AboutClient from "./AboutClient";

export default async function AboutPage() {
    const experience = await getExperience();
    const education = await getEducation();
    const certificates = await getCertificates();
    const aboutData = await getAbout();

    return (
        <AboutClient 
            experience={experience} 
            education={education} 
            certificates={certificates} 
            aboutData={aboutData} 
        />
    );
}
