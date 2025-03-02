import styles from "../../styles/Home.module.css";

export default function camp2025info() {
    return (
        <section className={styles.campInfo}>
            <h1>Annual Summer Camp 2025</h1>
            <hr className={styles.formLineBreak}></hr>
            <div className={styles.infoBox}>
                <p><strong>Dates:</strong> June 27th - June 29th, 2025</p>
                <p><strong>Fees:</strong> $50 for 10 y/o & below, $70 for 10+ y/o</p>
                <p className={styles.highlight}><strong>Registration Due Date:</strong> May 15, 2025</p>
                <p><strong>Location:</strong> Stearns Scout Camp, MN</p>
                <p><strong>Leaders in Charge:</strong> Tyler Pham, Sarah Pham, Mi Pham</p>
            </div>
        </section>
    )
}