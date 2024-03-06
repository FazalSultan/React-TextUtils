import React from 'react'
import { useState } from 'react';

export default function Textform(props) {
    const [current_text, settext] = useState("");
    const [searchValue, setSearchValue] = useState(""); // State to store the search value
    const [current_search_state, setCurrentSearchState] = useState(0); // State to store the search count

    // var searchValue;

    const touppercase_function = () => {
        var new_text = current_text.toUpperCase();
        settext(new_text);
    }

    const onclickhandle = (event) => {
        settext(event.target.value);
    }

    const tolowercase_function = () => {
        var new_lower_case = current_text.toLowerCase();
        settext(new_lower_case);
    }
    const empty_text_function = () => {
        settext(" ");


    }
   const copyText = () => {
    var textarea = document.getElementById('exampleFormControlTextarea1');
    textarea.select();
    document.execCommand('copy');
    // console.log("Text copied:", textarea.value);
}

    const text_rev_function = () => {
        var revse_new_text = current_text.length;
        var empty_string_variable = "";
        for (var i = revse_new_text - 1; i >= 0; i--) {
            empty_string_variable += current_text[i];
        }
        settext(empty_string_variable);

    }


    // Calculating No Of chracter in a given String..
    const words_count_function = () => {
        let word_counting = current_text.length;
        let except_space = 0;
        for (let i = 0; i < word_counting; i++) {
            if (current_text[i] === ' ' || current_text[i] === '\t' || current_text[i] === '\n') {
                continue
            }
            else {
                except_space++;
            }
        }

        document.getElementById("exampleFormControlTextarea1").value = except_space;

    }

    const search_word_fun = (e) => {
        const value = e.target.value;
        setSearchValue(value); // Update the search value state
        setCurrentSearchState(0); // Reset the search count state
        if (!value.trim()) { // If search value is empty or only whitespace
            return; // Exit the function
        }
        const match_word_from = current_text;
        const regex = new RegExp(value, 'gi');
        const temp_clone = match_word_from.match(regex);
        if (temp_clone && temp_clone.length > 0) { // If matches are found
            setCurrentSearchState(temp_clone.length); // Update the search count
        }
    }


    return (
        <>
            <div className="container ">
                <div className="mb-3">
                    <h3 className='my-3'>{props.heading_paragraph} <span className="searchtextintextarea">Search Words: <input type="search" name="search-box" id="search-text-box" onChange={search_word_fun} /></span></h3>
                    <textarea className="form-control container" id="exampleFormControlTextarea1" rows="8" value={current_text} onChange={onclickhandle} placeholder='Enter Text Here...'></textarea>
                </div>
                <div className=" space">
                    <button className="btn btn-primary" onClick={touppercase_function} >To Upper-Case ?</button>
                    <button className="btn btn-primary" onClick={tolowercase_function}>To lower-Case ?</button>
                    <button className="btn btn-primary" onClick={words_count_function}>To Count-Words ?</button>
                    <button className="btn btn-primary" onClick={empty_text_function}>Empty Text-Area ?</button>
                    <button className="btn btn-primary" onClick={text_rev_function}>Want to Reverse?</button>
                    <button className="btn btn-primary" onClick={copyText}>Copy Text ?</button>
                </div>

                <div className="searchwordpara my-3">
                    The <b>{searchValue}</b> is Present <b>{current_search_state}</b> times in the given Text in the Text-Area.
                </div>

            </div>

        </>

    )
}
