import styles from "../../styles/Home.module.css";

export default function camp2025info() {
    return (
        <section className={styles.campInfo}>
            {/* <h1>Camp Radiance 2025</h1> */}
            {/* <hr className={styles.formLineBreak}></hr> */}
            <div className={styles.infoBox}>
                {/* <p><strong>Dates:</strong> June 27th - June 29th, 2025</p>
                <p><strong>Fees:</strong> $80 for ages from 7 to 13, $100 for 14+ y/o</p>
                {/* <p className={styles.highlight}><strong>Registration Due Date:</strong> May 15, 2025</p> */}
                {/*<p><strong>Location:</strong> Stearns Scout Camp, MN</p>
                <p><strong>Leaders in Charge:</strong> Tyler Pham, Sarah Pham, Mi Pham</p> */}
                {/* <object data="/PermissonForm.pdf" type="application/pdf" frameborder="0" width="100%" height="600px">
                    <embed src="https://docs.google.com/document/d/1Yyl25EDS_xq0VaSSOk5JcVm4UdTnarDCq3IBWX5sjQ4/preview?usp=sharing" width="100%" height="600px"/> 
                </object> */}
                <img src="/campform1.png" alt="Camp Rules" width="100%"></img>
                <img src="/campform2.png" alt="Camp Rules" width="100%"></img>
            </div>
        </section>
    )
}