import React, { useState } from 'react';

const New = ({ user }) => {
  const [oneWord, setOneWord] = useState({
    first: "",
    second: ""
  });
  const [words, setWord] = useState({});

  const onChange = e => setOneWord(...oneWord, [e.target.name]: e.target.value)
  const add = () => {
    setWord([oneWord.first]: oneWord.second);
    setOneWord([first]: "", [second]: "");
    localStorage.setItem('dictonary', words);
  };

  const onSave = async () => {
    try {
      const old_dictonary = user.dictonary;
      const new_dictonary_name = document.querySelector('.dictonary');
      if (Object.keys(user.dictonary).indexOf(name) >= 0) {
        localhost.setItem('dictonary',JSON.stringify(Object.assign(user.dictonary[new_dictonary_name], words)));
      } else {
        old_dictonary[new_dictonary_name] = words;
        localStorage.setItem('dictonary',JSON.stringify(old_dictonary));

      }
      const url = `https: //localhost:5050/api/users/dictonary/${user._id}`;
      const res = axios.put(url, localStorage.dictonary, headers: { token: localStorage.getItem('token') });
      toast.success(res.data.message);
    } catch (e) {
      console.error(e);
    }
  };

  const replace = () => {
    let first = document.querySelector('#first');
    let second = document.querySelector('#second');
    first.classList.remove('first');
    first.classList.add('second');
    second.classList.remove('second');
    second.classList.add('first');
  };

  return (
    <>
  <div className="row mt-4">
    <div className="col-2 d-flex align-items-center justify-content-center">
      <img src="test.webp"  className="btn-img w-75" />
    </div>
    <div className="col-8 d-flex align-items-center justify-content-center">
      <input type="text" className="dictonary" value="Dictonary" />
    </div>
    <div onClick={e=>onSave(e)} className="col-2 d-flex align-items-center justify-content-center">
      <img src="save.webp"  className="btn-img w-75" />
    </div>
    <div onClick={add} className="col-12 d-flex align-items-center justify-content-end pe-3">
      <img src="new.webp"  className="btn-img mt-4" />
    </div>
  </div>

  <div className="row mt-5 d-flex justify-content-center">
    <div className="col-10 underline d-flex">
      <button className="submit-button dropdown-toggle p-1">
        <img src="uzb.jpg" className="rounded-5 img" />
      </button>
      <input name='first' onChange={(e)=>onChange(e)} type="text" className="ms-2" value={oneWord.first}>
    </div>
    <div className="col-10 d-flex align-items-center justify-content-end mt-4" onClick={replace}>
      <img src="up-down.webp"  className="btn-img">
    </div>
    <div className="col-10 underline d-flex">
      <button className="submit-button p-1 dropdown-toggle">
        <img src="uzb.jpg" className="rounded-5 img" />
      </button>
      <input name='second' onChange={(e)=>onChange(e)} type="text" value={oneWord.second}>
    </div>
  </div>
  
    </>
  )
};

export default New;
