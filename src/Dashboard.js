import React from 'react';

function Dashboard() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://www.shutterstock.com/image-vector/abstract-healthcare-innovation-medical-research-260nw-2206349881.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: "'Poppins', sans-serif",
        color: '#fff',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        animation: 'fade-in 3s infinite alternate',
    };

    const formStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.15)', 
        borderRadius: '15px',
        padding: '20px 30px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
        backdropFilter: 'blur(10px)',
        maxWidth: '400px',
        width: '90%',
        textAlign: 'left',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 15px',
        margin: '10px 0',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'black',
        outline: 'none',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '12px 15px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        width: '100%',
        transition: 'all 0.3s ease', // Smooth transition for all properties
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3', // Darker blue for hover effect
        transform: 'scale(1.05)', // Slightly enlarge the button
    };

    const socialsStyle = {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    };

    const socialIconStyle = {
        color: '#fff',
        fontSize: '24px',
        textDecoration: 'none',
        transition: 'transform 0.3s',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Healthcare Dashboard</h1>
            <form style={formStyle}>
                <label>
                    Name:
                    <input style={inputStyle} type="text" placeholder="Enter your name" />
                </label>
                <label>
                    Age:
                    <input style={inputStyle} type="number" placeholder="Enter your age" />
                </label>
                <label>
                    Upload File:
                    <input style={inputStyle} type="file" />
                </label>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Submit
                </button>
            </form>

            <div style={socialsStyle}>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" style={socialIconStyle}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ width: '24px', height: '24px' }} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" style={socialIconStyle}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEUAAAD///+6urr8/Pzz8/Pe3t7w8PDIyMi+vr739/fX19fk5OTDw8NhYWGUlJRGRkbq6uo9PT2oqKgxMTFpaWmwsLB6enqampoYGBiJiYlbW1s3NzfQ0NBSUlJxcXEjIyMODg6APx8EAAAEN0lEQVR4nO2ayWKjMBBEsbGJMXYM8TrxAv//lZOlVWoJZDSJJA7T75QQlgoUpVaLLBMEQRAEQRAEQRAEQRAEQfiPaFZzF3uvE1w2+ojVKZCq1czFxufwds2OWLaBRGVrp6qzx9E3tn/VhNKUNQuXqPx99OA3vvsumKYsO+UuVfXY4+CaZtuAmqxTG7w8P/DE9w1lcqJ7+ZmtHrnvnj9hD1st56tP5qXyyZNnsiuZpnloTVn2jpOTiw7q9+Lq1FT7P+efcVZnX5Oq4+jleJRUlxiiso06v4pMBNDb4P4dD6giiqQPW+Fh0FvUwDGDaTVnmhZhw4AB2+aH7w0H9W4tBkLRSJF7LE1Z9qquUdsXvvX2NQLqNZ4m5m0lAvFl2+rBNf2JqSnraut/x6ionijR8IDyqiV+gR6aybnvylY5T6srH8FXkTUxq9QkArZiadUlCCgD2GpNG2CrIzTxgbLyq05/xwV3gcbXBj5TtjoyTUErKDctPEwZilGR0urMNUULTQvYSo3EULH8/O0P0xS6gnqCHpq77w0YFT/Sass1Ba+gngBbkbe7Qm143AumKUIF5eZqD81b5bOyYpqiVFBu4O2SXq7XWZ9lgoAyONtX7tfwdYqAMsGsmXyzX1qaiojVigs9NFMJsDM15Y/0mri3KR+NfEoYUAYQUdEG3gcZrtoTgBpcvfr19JqyFplEFR+eqEfbIxp7DM1kK4yKy/RxAGArlUkYBONXm27s2Yxu2kWdv4yAyKR6AGmVqLgbBENzTsGka/hgzc1/B/O7kgZBBEXSusWiNzTbQTEJ6K1QxXdXc75ywrRqkONkKzzRYjpb6S7UgqoV2Cr2fN0Jr+5UM2akmxYds5dNttqhJzyJrc4zE8pQbStnkzYeD0vTLCdbjTdpo7Htr46oodnuOCTD6IxZt6ZRk9LExfqeTzxvGJopyPFkFynT6mJ2xq5o6VFH6EmTNh68TV40rOJTQT5BWhmdsa93Tjcau689dDctVZOKz/JULQVb0a3RS0rhFml9NaFG2dnNGN3ISqHpzjVpy9irbXrJKEFaGZ0xPnGBrejWtNgx/jSery2qFuMXnf3GJUsrI6DszhiWGqgZg27aOm4LjVdQvS7Uw15tw38QNa14QJX9zphuxnw/MD0YRbTVaJvcnkjo3n+02spYWxxcx2vtWTNsVQ3tHoA7r1aOjn3U39XUPfIg2OTjmvg6CeUA0irGEqnRAjYCygSNRppjHdT9HVoA/yUX76+zbFvpblrwtOIVVPn0VbrbHwsg20K3PYyAGpnQGS/ppzj8FNZWxvLL6GzgOHNQBv3YjJ/Zo8tzc6kKuNB94AHlkze7wqUqmK2MS/jNeg8uUaFs1RpTPM/77/yObxGk7XHhoVl1voc5v+ML0qQ9se9s5/7reHvX172bida4BEEQBEEQBEEQBEEQBEEQpuEvTegqZXDXp5IAAAAASUVORK5CYII=" alt="Twitter" style={{ width: '24px', height: '24px' }} />
                </a>
                
            </div>
        </div>
    );
}

export default Dashboard;
