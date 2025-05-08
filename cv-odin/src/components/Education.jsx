export default function Education({ info, onChange, isEditing }) {
    function handleChange(e) {
      onChange({ ...info, [e.target.name]: e.target.value });
    }
  
    return (
      <section>
        <h2>Education</h2>
        {isEditing ? (
          <>
            <label>
              School:
              <input name="school" value={info.school} onChange={handleChange} placeholder="School" />
            </label>
            <label>
              Degree:
              <input name="degree" value={info.degree} onChange={handleChange} placeholder="Degree" />
            </label>
            <label>
              Date:
              <input name="date" value={info.date} onChange={handleChange} placeholder="Date" />
            </label>
          </>
        ) : (
          <>
            <p><strong>School:</strong> {info.school}</p>
            <p><strong>Degree:</strong> {info.degree}</p>
            <p><strong>Date:</strong> {info.date}</p>
          </>
        )}
      </section>
    );
  }
  