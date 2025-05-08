export default function Experience({ info, onChange, isEditing }) {
    function handleChange(e) {
      onChange({ ...info, [e.target.name]: e.target.value });
    }
  
    return (
      <section>
        <h2>Experience</h2>
        {isEditing ? (
          <>
            <label>
              Company:
              <input name="company" value={info.company} onChange={handleChange} placeholder="Company Name" />
            </label>
            <label>
              Position:
              <input name="position" value={info.position} onChange={handleChange} placeholder="Position Title" />
            </label>
            <label>
              Responsibilities:
              <input name="responsibilities" value={info.responsibilities} onChange={handleChange} placeholder="Main Responsibilities" />
            </label>
            <label>
              From:
              <input name="from" value={info.from} onChange={handleChange} placeholder="From" />
            </label>
            <label>
              Until:
              <input name="until" value={info.until} onChange={handleChange} placeholder="Until" />
            </label>
          </>
        ) : (
          <>
            <p><strong>Company:</strong> {info.company}</p>
            <p><strong>Position:</strong> {info.position}</p>
            <p><strong>Responsibilities:</strong> {info.responsibilities}</p>
            <p><strong>From:</strong> {info.from}</p>
            <p><strong>Until:</strong> {info.until}</p>
          </>
        )}
      </section>
    );
  }
  