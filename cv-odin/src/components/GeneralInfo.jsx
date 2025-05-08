export default function GeneralInfo({ info, onChange, isEditing }) {
    function handleChange(e) {
        onChange({ ...info, [e.target.name] : e.target.value });
    }

    return (
        <section>
          <h2>General Information</h2>
          {isEditing ? (
            <>
              <label>
                Name:
                <input name="name" value={info.name} onChange={handleChange} placeholder="Name" />
              </label>
              <label>
                E-mail:
                <input name="email" value={info.email} onChange={handleChange} placeholder="Email" />
              </label>
              <label>
                Phone:
                <input name="phone" value={info.phone} onChange={handleChange} placeholder="Phone" />
              </label>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {info.name}</p>
              <p><strong>Email:</strong> {info.email}</p>
              <p><strong>Phone:</strong> {info.phone}</p>
            </>
          )}
        </section>
      );
}