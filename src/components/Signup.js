// ... existing code ...

const [isCorporateUser, setIsCorporateUser] = useState(false);

// Add this checkbox in your form JSX
<div className="form-group">
  <label>
    <input
      type="checkbox"
      checked={isCorporateUser}
      onChange={(e) => setIsCorporateUser(e.target.checked)}
    />
    Sign up as Corporate User
  </label>
</div>

const handleSubmit = async (e) => {
  e.preventDefault();
  
  const user = await registerWithEmailAndPassword(
    name,
    email,
    password,
    isCorporateUser  // Pass the actual boolean value
  );
};

// ... existing code ...