import {useState} from "react";

const TransactionForm = () => {
    const [transaction, setTransaction] = useState({
        transaction_id: '',
        timestamp: '',
        device_number: '',
        user_id: '',
        geo_position: '',
        amount: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formattedTimestamp = new Date(transaction.timestamp).toISOString();

        const transactionWithFormattedTimestamp = {
            ...transaction,
            timestamp: formattedTimestamp,
            amount: parseFloat(transaction.amount), // Ensure amount is a number
        };

        console.log('Formatted transaction:', JSON.stringify(transactionWithFormattedTimestamp, null, 2));

        try {
            const response = await fetch('/api/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transactionWithFormattedTimestamp),
            });

            const result = await response.text();
            if (response.ok) {
                console.log('Transaction successful:', result);
            } else {
                throw new Error(`Error: ${result}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Transaction ID:</label>
                <input type="text" name="transaction_id" value={transaction.transaction_id} onChange={handleChange} required />
            </div>
            <div>
                <label>Timestamp:</label>
                <input type="datetime-local" name="timestamp" value={transaction.timestamp} onChange={handleChange} required />
            </div>
            <div>
                <label>Device Number:</label>
                <input type="text" name="device_number" value={transaction.device_number} onChange={handleChange} required />
            </div>
            <div>
                <label>User ID:</label>
                <input type="text" name="user_id" value={transaction.user_id} onChange={handleChange} required />
            </div>
            <div>
                <label>Geo Position:</label>
                <input type="text" name="geo_position" value={transaction.geo_position} onChange={handleChange} required />
            </div>
            <div>
                <label>Amount:</label>
                <input type="number" name="amount" value={transaction.amount} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TransactionForm;
