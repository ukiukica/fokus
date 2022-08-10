import states from 'states-us';



function StateSelectField({state, updateState}) {
    return (
        <label className='form-label'>
                    State
                    <select
                    className='form-select'
                    name='state'
                    onChange={updateState}
                    value={state}
                    >
                        <option disabled value=''>Choose</option>
                        {states.map((state) => (
                            <option value={state.abbreviation} key={state.abbreviation}>{state.name}</option>
                        ))}
                        {/* <option value="NJ">New Jersey</option>
                        <option value="KS">Kansas</option>
                        <option value="CA">California</option>
                        <option value="VT">Vermont</option>
                        <option value="CA">California</option> */}
                    </select>
                </label>
    )
}

export default StateSelectField;
