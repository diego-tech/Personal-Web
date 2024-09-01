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
                            datetime={starttime}
                            data-title={starttime}>
                            {starttime}
                        </time>
                        {" - "}
                        <time
                            datetime={endtime}
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