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
                        <option>New York</option>
                        <option>New Jersey</option>
                    </select>
                </label>
    )
}

export default StateSelectField;
