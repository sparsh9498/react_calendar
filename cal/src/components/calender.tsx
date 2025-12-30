import React from 'react';
import moment from 'moment';
import './calender.css';

interface CalenderProps {
    date: Date;
}

const Calender: React.FC<CalenderProps> = ({ date }) => {
    const selectedDate = moment(date).date();
    const startOfMonth = moment(date).startOf('month');
    const endOfMonth = moment(date).endOf('month');


    const weeks: (number | null)[][] = [];
    let current = moment(startOfMonth).startOf('week');
    const last = moment(endOfMonth).endOf('week');

    while (current.isBefore(last)) {
        const week: (number | null)[] = [];
        for (let i = 0; i < 7; i++) {
            if (current.month() === startOfMonth.month()) {
                week.push(current.date());
            } else {
                week.push(null);
            }
            current.add(1, 'day');
        }
        weeks.push(week);
    }

    return (
        <div>
            <div>
                {moment(date).format("MMMM")} {moment(date).year()}
            </div>
            <div className="calendar-table">
                <table>
                    <thead>
                        <tr>
                            {moment.weekdaysShort().map(d => (
                                <th key={d} className="day">{d}</th>
                            ))}
                        </tr>
                    </thead>
                    {/* <tr>
                        <td colSpan={7}>
                            <hr />
                        </td>
                    </tr> */}
                    <tbody>
                        {weeks.map((week, i) => (
                            <tr key={i}>
                                {week.map((d, j) =>
                                    d ? (
                                        <td
                                            key={j}
                                            className={`date${d === selectedDate ? ' selected' : ''}`}
                                        >
                                            {d}
                                        </td>
                                    ) : (
                                        <td key={j} className="date empty"></td>
                                    )
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Calender;