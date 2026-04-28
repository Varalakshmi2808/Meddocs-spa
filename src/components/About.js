import React from 'react';
import './About.css';

const features = [
  { icon: "🔓", title: "Open Access", desc: "All research freely available to the global community without subscription barriers." },
  { icon: "🧐", title: "Peer Review", desc: "Rigorous double-blind peer review by domain-expert editorial boards worldwide." },
  { icon: "⚡", title: "Rapid Publication", desc: "Streamlined editorial process ensures timely dissemination of critical research." },
  { icon: "🌐", title: "Global Reach", desc: "Published authors span 120+ countries, maximizing the impact of your research." },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Visual panel */}
          <div className="about-text animate-fade-up delay-2">
            <div className="section-label">Welcome to MedDocs</div>
            <h2 className="section-heading">About Us</h2>
            <p className="about-body">
              MedDocs Publishers is a very well-dedicated in publishing various informative medical journals which acts as a powerhouse to bring the physicians and the entire medical fraternity the best research with latest discovered key information in a completely understandable and clinically useful format. This is certainly a career companion for all physicians and medical researchers. The practicing physicians can be well informed about the various new developments in the field which is very necessary to treat patients in the best possible way.

We are very particular about employing the highly rigorous peer-review process and also editing process at the same time in order to evaluate the overall scientific accuracy, importance and novelty of the articles and thesis that are submitted to be published. Thus, the information in all published contents is highly reliable and accurate. This has led to a great increase in the readership of all our published journals. We maintain a great reputation among the readers and also maintain integrity while in the process of using these innovative formats and various latest technologies for making all our publications a great success.

We are committed to publish the highest quality research works for the benefit of the medical fraternity. Our discerning and unbiased approach of the peer-reviewing of the overall editorial process ensures highest standards for medical publishing. There are physical editors and also statistical experts who take care of the highest standards of work. For all our sincere initiatives, we are able to create an important impact on the overall global medical community.

MedDocs Publishers also have a division which publishes informative medical e-books on various niches of medical sciences. These are great powerhouses of knowledge for the global medical fraternity. Also there is a separate wing which organizes international conferences and invites veteran scientists and research professionals from all across the globe in a single platform that enables seamless exchange of knowledge in a global level.
            </p>
            <p className="about-body">
              The journals, eBooks, and conferences we publish and organize aim to spread information on the latest technological and scientific discoveries among core scientific groups, ultimately benefiting mankind.
            </p>

          

            <a href="#journals" className="btn btn-primary">Explore Our Journals</a>
          </div>
          <div className="about-visual animate-fade-up">
            <div className="about-visual-inner">
              <div className="av-badge av-badge-1">
                <span>🏆</span>
                <div>
                  <strong>Indexed</strong>
                  <p>PubMed, Scopus & more</p>
                </div>
              </div>
              <div className="av-badge av-badge-2">
                <span>✅</span>
                <div>
                  <strong>Peer Reviewed</strong>
                  <p>Expert editorial board</p>
                </div>
              </div>
              <div className="av-card-main">
                <div className="av-dna-icon" aria-hidden>🧬</div>
                <h3>Medical Publishing Excellence</h3>
                <p>Dedicated to the betterment of humanity through scientific knowledge.</p>
                <div className="av-line" />
                <div className="av-stats-row">
                  <div>
                    <strong>45+</strong>
                    <span>Journals</span>
                  </div>
                  <div>
                    <strong>2024</strong>
                    <span>Est.</span>
                  </div>
                  <div>
                    <strong>100%</strong>
                    <span>Open Access</span>
                  </div>
                </div>
              </div>
              
            </div>
              <div className="about-features">
              {features.map((f, i) => (
                <div className="feature-item" key={i}>
                  <div className="feature-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text panel */}
        </div>
      </div>
    </section>
  );
}
