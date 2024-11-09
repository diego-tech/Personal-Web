export const Experience = ({ company, position, starttime, endtime, summary }) => (
    <ul className='expList'>
        <li>
            <article>
                <header>
                    <div>
                        <h3>
                            {company}
                        </h3>
                        <h4>{position}</h4>
                    </div>

                    <div>
                        <time
                            dateTime={starttime}
                            data-title={starttime}>
                            {starttime}
                        </time>
                        {" - "}
                        <time
                            dateTime={endtime}
                            data-title={endtime}>
                            {endtime}
                        </time>
                    </div>
                </header>
                <footer>
                    <p>{summary}</p>
                </footer>
            </article>
        </li>
    </ul>
)