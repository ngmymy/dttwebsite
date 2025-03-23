import styles from "../../styles/Home.module.css";
import {convertSegmentPathToStaticExportFilename} from "next/dist/shared/lib/segment-cache/segment-value-encoding";



export default function camp2025form() {
  return (
    <section className={styles.registrationForm}>
      <h2>Camper Registration Form | Đơn Đăng Ký Cắm Trại</h2>
      <hr className={styles.formLineBreak}></hr>
      <form action={sendForm}>
        <label>
          First Name | Tên
          <input  type="text" name="firstName" maxLength="20" required/>
        </label>

        <label>
          Last Name | Họ
          <input type="text" name="lastName" maxLength="20" required/>
        </label>

        <label>
          Date of Birth | Sinh Nhật
          <input type="date" name="birthdate" required/>
        </label>

        <label for="gender">Gender | Giới Tính:
          <select name="gender" id="gender" required>
            <option value="male">Male | Nam</option>
            <option value="female">Female | Nữ</option>
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
          Special Needs | Nhu Cầu Đặc Biệt
          <p> Medical conditions, allergies, etc. | Điều kiện ý tế, dị ứng, v.v.:</p>
          <input type="text" name="specialNeeds" placeholder="Special Needs" maxLength="30"/>
        </label>
        <label>
          Guardian's Full Name | Tên Họ Cha Mẹ/Người Giám Họ
          <input type="text" name="parentName" placeholder="Full Name" maxLength="20" required/>
        </label>
        <label>
          Guardian's Contact Phone Number | Số Điện Thoại Cha Mẹ/Người Giám Họ
          <input type="tel" name="parentPhone" placeholder="Phone Number" maxLength="10" required/>
        </label>
        <label>
          Guardian's Contact Email | Email Cha Mẹ/Người Giám Họ:
          <input type="email" name="parentEmail" placeholder="Email" maxLength="40" required/>
        </label>

        <label>
          Child's Photo | Hình Ảnh Của Con:
          <input type="file" name="childPhoto" accept="image/*" required/>
        </label>

        <button type="submit">Submit Registration | Nộp Đơn</button>
      </form>
    </section>
  )
}

function sendForm(formData){

  console.log(formData)
  console.log(formData.get("birthdate"))
  console.log(formData.get("childPhoto"))

  let data = new FormData();
  data.append("firstName", formData.get("firstName"));
  data.append("lastName", formData.get("lastName"));
  data.append("birthdate", formData.get("birthdate"));
  data.append("gender", formData.get("gender"));
  data.append("nganh", formData.get("nganh"));
  data.append("specialNeeds", formData.get("specialNeeds"));
  data.append("parentName", formData.get("parentName"));
  data.append("parentPhone", formData.get("parentPhone"));
  data.append("parentEmail", formData.get("parentEmail"));
  data.append("childPhoto", formData.get("childPhoto"));


  fetch(
    "https://api.doantomathien.org/camp2025/register",
    //"http://localhost:8153/camp2025/register",
    {
      method: "POST",
      body: data
    }
  ).then(r=> r.json()
  ).then(datar => {console.log(datar)
  })

  const reader = new FileReader();
  // if (formData.target.files[0]){
  //
  // }

  // data.append("childPhoto", formData.get("childPhoto"));
  //"https://api.doantomathien.org/camp2025/register"
}