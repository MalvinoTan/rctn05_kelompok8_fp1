import { ProgressBar } from "react-bootstrap";
import AboutSection from "../../components/AboutSection";
import SectionHeader from "../../components/SectionHeader";
import styles from "./style.module.css";

const About = () => {
    const aboutData = {
        malvino: {
            id: "RCTN-KS05-006",
            name: "Malvino Austin Tanura",
            progress: [
                "Pengembangan aplikasi website"
            ]
        },
        taofik: {
            id: "RCTN-KS05-025",
            name: "Taofik Arianto",
            progress: [
                "Pembuatan desain figma",
                "Pembuatan panduan dan cara penggunaan aplikasi"
            ]
        }
    }

    const percentage = 100;

    return (
        <div className={styles.container}>
            <SectionHeader title="About" />
            <h3>Final Project Kelompok 08 - News API</h3>
            <h3><small>Progress Percentage</small></h3>
            <ProgressBar variant="success" now={percentage} label={`${percentage}%`} animated={45} style={{ width: "70%", margin: "0 auto" }} className="my-4" />
            <AboutSection data={aboutData.malvino} />
            <AboutSection data={aboutData.taofik} />
            <h3>
                <a href="https://trello.com/b/4L4Fl1jg/final-project-1-news-api" target="_blank" rel="noreferrer">Link Trello</a>{" | "}
                <a href="https://www.figma.com/file/JuL6qfS8EkLA5Kuj3y0MjP/News-App?node-id=0%3A1" target="_blank" rel="noreferrer">Link Figma</a>{" | "}
                <a href="https://github.com/MalvinoTan/rctn05_kel08_news-api.git" target="_blank" rel="noreferrer">Link GitHub</a>
            </h3>
        </div>
    );
};

export default About;