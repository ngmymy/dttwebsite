import styles from "../../styles/Home.module.css";

export default function camp2025form() {
  return (
    <section className={styles.registrationForm}>
      <h2>Camper Registration Form</h2>
      <hr className={styles.formLineBreak}></hr>
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

        <label htmlFor="nganh">Ngành:
          <select name="nganh" id="nganh">
            <option value="Au Nhi" id="aunhi">Ấu Nhi</option>
            <option value="Thieu Nhi" id="thieunhi">Thiếu Nhi</option>
            <option value="Nghia Si" id="nghiasi">Nghĩa Sĩ</option>
            <option value="Hiep Si" id="hiepsi">Hiệp Sĩ</option>
          </select>
        </label>

        <label>
          Special Needs (medical history, allergies, medications, etc):
          <input type="text" name="specialNeeds"/>
        </label>

        <label>
          Guardian's Full Name and Relationship:
          <input type="text" name="guardiansname"/>
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