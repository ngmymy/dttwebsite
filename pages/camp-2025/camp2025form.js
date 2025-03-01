import styles from "../../styles/Home.module.css";

export default function camp2025form() {
    return (
        <section className={styles.registrationForm}>
            <h2>Camper Registration Form</h2>
            <form method="post" encType="multipart/form-data">
                <label>
                    First Name:
                    <input type="text" name="firstName" required/>
                </label>

                <label>
                    Last Name:
                    <input type="text" name="lastName" required/>
                </label>

                <label>
                    Date of Birth:
                    <input type="date" name="birthdate" required/>
                </label>

                <label for="nganh">Ngành:
                    <select name="nganh" id="nganh" autoFocus>
                        <option value="Au Nhi">Ấu Nhi</option>
                        <option value="Thieu Nhi">Thiếu Nhi</option>
                        <option value="Nghia Si">Nghĩa Sĩ</option>
                        <option value="Hiep Si">Hiệp Sĩ</option>
                    </select>
                </label>
                <label>
                    Guardian's Contact Phone Number:
                    <input type="tel" name="parentPhone" placeholder="Phone Number" required/>
                </label>
                <label>
                    Guardian's Contact Email:
                    <input type="email" name="parentEmail" placeholder="Email" required/>
                </label>

                <label>
                    Child's Photo:
                    <input type="file" name="childPhoto" accept="image/*" required/>
                </label>

                <button type="submit">Submit Registration</button>
            </form>
        </section>
    )
}