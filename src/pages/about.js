import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card.js';
import ProgressHOC from '../components/progressHOC';
import '../themes/about.css';

class About extends Component {
    render () {
        if (this.props.language == 'zh')
            return (
                <div>
                    <Card
                    customerStyle={{
                        width: '800px',
                        minHeight: '780px',
                        margin: '0 auto',
                        marginTop: '140px',
                        marginBottom: '140px',
                        textAlign: 'center',
                        paddingTop: '100px',
                        paddingBottom: '50px',
                        paddingLeft: '70px',
                        paddingRight: '70px'
                    }}
                    header={(
                        <div className="sosconf__about-header">
                            <h1>sosconf学生开源年会</h1>
                            <div className="sosconf__about-header-break"></div>
                        </div>
                    )}
                    body={(
                        <div className="sosconf__about-card-content">
                            <p>
                            Students Open Source Conference（简称 sosconf），是首个由学生组织、面向学生的非盈利社区全球性开源技术峰会。大会由开源工场和息壤开源生活方式平台创办，致力于纯粹的技术交流和多元的思想碰撞，为学生群体建立活跃、多元、纯粹、关注学习和未来的技术社区。 Sosconf 2019 开源年会将在美国时间的9月1日于南加州大学（University of Southern California，简称南加大）举办。本次大会围绕着“开源”主题，囊括开源项目、网络安全、云计算、大数据、编程语言、人工智能、机器学习、区块链、社区治理等领域，并特设《全球学生开源项目博览会》板块。大会每年在不同国家不同城市举办，不仅吸引了国内外高等院校的支持和参与，更引起了计算机领域的精英分子和知名企业的关注和重视。此外，开源项目的核心开发者和国际知名演讲者都会在当天抵达现场，参与开源。在第0届的开源年会中，大会参与人数近1000人，在线直播观看人数超过万人，影响预计超过十万人。 
                            </p>
                            <a className="sosconf-home__button--black sosconf-card__button--green">
                                <span><a href="mailto:hi@sosconf.org">Contact us</a></span>
                            </a>
                        </div>
                    )}/>
                </div>
            ) 
        else {
            return (
                <div>
                    <Card
                    customerStyle={{
                        width: '800px',
                        minHeight: '780px',
                        margin: '0 auto',
                        marginTop: '140px',
                        marginBottom: '140px',
                        textAlign: 'center',
                        paddingTop: '100px',
                        paddingBottom: '50px',
                        paddingLeft: '70px',
                        paddingRight: '70px'
                    }}
                    header={(
                        <div className="sosconf__about-header">
                            <h1>Student Open Source Conference (sosconf)</h1>
                            <div className="sosconf__about-header-break"></div>
                        </div>
                    )}
                    body={(
                        <div className="sosconf__about-card-content">
                            <p>We are an international community of students, who have also contributed to events such as TEDx, FOSSASIA, Jugaad Fest and IBM Developer Day. Some are members of Society of Opening Source SC (a student organization at University of Southern California), and some are members of Opening Source Org. On the other hand, only students are eligible to be speakers and volunteers, but anyone can participate. Our supporters and supervisors include active community members such as the convenor of GNOME.Asia, and also include professors from colleges in multiple countries.</p>
                            <p>sosconf is the very first student-held, student-centered international conference focusing on open source. It will be a great opportunity for students around the world to gather, connect and learn from each other. For companies and organizations, it will be a chance to show their commitment to open source and to search for student talents.</p>
                            <a className="sosconf-home__button--black sosconf-card__button--green">
                                <span><a href="mailto:hi@sosconf.org">Contact us</a></span>
                            </a>
                        </div>
                    )}/>
                </div>
            )
        }
    }
}

export default ProgressHOC(connect(state => {
    return {
        language: state.language
    }
})(About));
