import styles from "../../styles/Home.module.css";

export default function camp2025form() {
    return (
        <section className={styles.registrationForm}>
            <h2>Camper Registration Form</h2>
            <hr className={styles.formLineBreak}></hr>
            <form method="post" encType="multipart/form-data">
                <label>
                    First Name:
                    <input type="text" name="firstName" maxlength="20" required/>
                </label>

                <label>
                    Last Name:
                    <input type="text" name="lastName" maxlength="20" required/>
                </label>

                <label>
                    Date of Birth:
                    <input type="date" name="birthdate" required/>
                </label>

                <label for="gender">Gender:
                    <select name="gender" id="gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>

                <label for="nganh">Ngành:
                    <select name="nganh" id="nganh" required>
                        <option value="Au Nhi">Ấu Nhi</option>
                        <option value="Thieu Nhi">Thiếu Nhi</option>
                        <option value="Nghia Si">Nghĩa Sĩ</option>
                        <option value="Hiep Si">Hiệp Sĩ</option>
                    </select>
                </label>
                <label>
                    Special Needs (medical conditions, allergies, etc.):
                    <input type="text" name="specialNeeds" placeholder="Special Needs" maxlength="30" required/>
                </label>
                <label>
                    Guardian's Full Name:
                    <input type="text" name="parentName" placeholder="Full Name" maxlength="20" required/>
                </label>
                <label>
                    Guardian's Contact Phone Number:
                    <input type="tel" name="parentPhone" placeholder="Phone Number" maxlength="10" required/>
                </label>
                <label>
                    Guardian's Contact Email:
                    <input type="email" name="parentEmail" placeholder="Email" maxlength="20" required/>
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