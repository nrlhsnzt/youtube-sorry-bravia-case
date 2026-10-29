'use client';

import { useState, useEffect } from 'react';

const SECTIONS = [
  {
    id: 'before-anything-goes-wrong',
    title: 'BEFORE ANYTHING GOES WRONG',
    items: [
      {
        number: 1,
        headline: 'Keep the invoice.',
        body: 'Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.'
      },
      {
        number: 2,
        headline: 'Register the product.',
        body: 'Many brands ask you to register on their website or app; some add extra warranty when you do.'
      },
      {
        number: 3,
        headline: 'Read the warranty card once.',
        body: 'Note how long it lasts, what it covers, and what it excludes.'
      },
      {
        number: 4,
        headline: 'Record the condition.',
        body: 'Take a few dated photos of the product once it is installed or unboxed.'
      }
    ]
  },
  {
    id: 'when-the-fault-appears',
    title: 'WHEN THE FAULT APPEARS',
    items: [
      {
        number: 5,
        headline: 'Record the fault.',
        body: 'Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.'
      },
      {
        number: 6,
        headline: 'Raise the complaint in writing.',
        body: "Use email, the brand's website or its app, not only a phone call, so there is a record."
      },
      {
        number: 7,
        headline: 'Note every reference number.',
        body: 'Write down the complaint or ticket number, the date and the name of anyone you speak to.'
      }
    ]
  },
  {
    id: 'when-a-technician-visits',
    title: 'WHEN A TECHNICIAN VISITS',
    items: [
      {
        number: 8,
        headline: 'Ask for the job sheet.',
        body: 'Ask the technician for a copy of the visit report or job sheet before they leave.'
      },
      {
        number: 9,
        headline: 'Ask what was tested.',
        body: 'Ask which test or instrument was used to reach the diagnosis.'
      },
      {
        number: 10,
        headline: 'Take your own photos.',
        body: 'Photograph the product and anything the technician points to, during the visit.'
      }
    ]
  },
  {
    id: 'if-the-claim-is-refused',
    title: 'IF THE CLAIM IS REFUSED',
    items: [
      {
        number: 11,
        headline: 'Ask for the reason in writing.',
        body: 'Request a written explanation that names the exact cause and the evidence for it.'
      },
      {
        number: 12,
        headline: 'Ask for the technical report.',
        body: 'If the refusal rests on an inspection, ask for that inspection report.'
      },
      {
        number: 13,
        headline: 'Escalate inside the company.',
        body: 'Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.'
      },
      {
        number: 14,
        headline: 'Keep it factual.',
        body: 'Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.'
      },
      {
        number: 15,
        headline: 'Know your consumer helpline.',
        body: 'Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.'
      }
    ]
  }
];

export default function ClaimReadyPage() {
  const [completedSteps, setCompletedSteps] = useState({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem('claim_ready_completed_steps');
      if (saved) {
        setCompletedSteps(JSON.parse(saved));
      }
    } catch {}
  }, []);

  const toggleStep = (id) => {
    const next = { ...completedSteps, [id]: !completedSteps[id] };
    if (!next[id]) delete next[id];
    setCompletedSteps(next);
    try {
      localStorage.setItem('claim_ready_completed_steps', JSON.stringify(next));
    } catch {}
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CLAIM READY',
          text: 'A warranty claim is decided on records. Keep yours, and ask for theirs in writing.',
          url: window.location.href,
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Ticker Strip: strictly lines from content.txt */}
      <aside className="ticker-strip" aria-label="Ticker">
        <div className="ticker-track">
          <span>CLAIM READY</span>
          <span>A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM.</span>
          <span>A WARRANTY CLAIM IS DECIDED ON RECORDS. KEEP YOURS, AND ASK FOR THEIRS IN WRITING.</span>
          <span>1 RULE: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN.</span>
          <span>DOWNLOAD THE CHECKLIST AND KEEP IT WITH YOUR INVOICES.</span>
          <span>SHARE IT WITH A FRIEND WHO JUST BOUGHT SOMETHING EXPENSIVE.</span>
          {/* Loop repeat */}
          <span>CLAIM READY</span>
          <span>A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM.</span>
          <span>A WARRANTY CLAIM IS DECIDED ON RECORDS. KEEP YOURS, AND ASK FOR THEIRS IN WRITING.</span>
          <span>1 RULE: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN.</span>
          <span>DOWNLOAD THE CHECKLIST AND KEEP IT WITH YOUR INVOICES.</span>
          <span>SHARE IT WITH A FRIEND WHO JUST BOUGHT SOMETHING EXPENSIVE.</span>
        </div>
      </aside>

      {/* Header */}
      <header className="site-header">
        <div className="shell-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              backgroundColor: 'var(--primary-soft)',
              border: '1px solid var(--primary-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: '-0.03em',
              color: 'var(--on-surface-strong)'
            }}>
              CLAIM READY
            </span>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="no-print">
            <a href="#before-anything-goes-wrong" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
              BEFORE ANYTHING GOES WRONG
            </a>
            <a href="#when-the-fault-appears" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
              WHEN THE FAULT APPEARS
            </a>
            <a href="#when-a-technician-visits" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
              WHEN A TECHNICIAN VISITS
            </a>
            <a href="#if-the-claim-is-refused" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
              IF THE CLAIM IS REFUSED
            </a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="no-print">
            <button onClick={handlePrint} className="btn-dark">
              Download the checklist and keep it with your invoices.
            </button>
          </div>
        </div>
      </header>

      <main style={{ flex: 1 }}>

        {/* Section: Headline Card (THE IDEA IN ONE LINE) */}
        <div style={{ paddingTop: 36, paddingBottom: 16 }}>
          <div className="shell-container">
            <div className="headline-card">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', zIndex: 1 }}>
                <div className="pill-eyebrow" style={{ backgroundColor: 'rgba(52, 211, 153, 0.12)', color: 'var(--primary-bright)', borderColor: 'rgba(52, 211, 153, 0.3)' }}>
                  <span className="pill-dot" style={{ backgroundColor: 'var(--primary-bright)' }} />
                  <span>THE IDEA IN ONE LINE</span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(18px, 3.2vw, 29px)',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  color: '#ffffff',
                  maxWidth: '48ch'
                }}>
                  A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="section-spacing" style={{ paddingTop: 48, paddingBottom: 64 }}>
          <div className="shell-container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 48,
              alignItems: 'center'
            }}>
              
              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div className="pill-eyebrow">
                  <span className="pill-dot" />
                  <span>WHO THIS IS FOR</span>
                </div>
                
                <h1 className="headline-display">
                  CLAIM READY
                </h1>

                <p className="headline-md" style={{ color: 'var(--primary-ink)', fontWeight: 700 }}>
                  A free checklist for anyone about to file a warranty claim.
                </p>

                <p className="lead-text">
                  Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, paddingTop: 8 }} className="no-print">
                  <button onClick={handlePrint} className="btn-primary">
                    Download the checklist and keep it with your invoices.
                  </button>
                  
                  <button onClick={handleShare} className="btn-ghost">
                    Share it with a friend who just bought something expensive.
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Document Card */}
              <div>
                <div className="card-standard">
                  <div style={{ marginBottom: 20 }}>
                    <div className="pill-eyebrow">
                      <span className="pill-dot" />
                      <span>THE IDEA IN ONE LINE</span>
                    </div>
                  </div>

                  <blockquote style={{
                    fontSize: 20,
                    lineHeight: 1.6,
                    fontWeight: 700,
                    color: 'var(--on-surface-strong)',
                    marginBottom: 20
                  }}>
                    A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
                  </blockquote>

                  <div className="card-callout">
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 14,
                      fontWeight: 600,
                      lineHeight: 1.5,
                      color: 'var(--primary-ink)'
                    }}>
                      1 rule: if it is not in writing, it did not happen.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: KEY NUMBERS FOR THE PAGE */}
        <section style={{ paddingBottom: 64 }}>
          <div className="shell-container">
            <div style={{ marginBottom: 20 }}>
              <div className="pill-eyebrow">
                <span className="pill-dot" />
                <span>KEY NUMBERS FOR THE PAGE</span>
              </div>
            </div>

            <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              
              <div className="stat-cell">
                <div className="stat-number">15</div>
                <div style={{ fontSize: 16, color: 'var(--on-surface-variant)', fontWeight: 600, lineHeight: 1.4 }}>
                  steps in the checklist.
                </div>
              </div>

              <div className="stat-cell stat-cell-hot">
                <div className="stat-number">4</div>
                <div style={{ fontSize: 16, color: 'var(--on-surface-variant)', fontWeight: 600, lineHeight: 1.4 }}>
                  records to keep before anything goes wrong.
                </div>
              </div>

              <div className="stat-cell">
                <div className="stat-number">1</div>
                <div style={{ fontSize: 16, color: 'var(--on-surface-variant)', fontWeight: 600, lineHeight: 1.4 }}>
                  rule: if it is not in writing, it did not happen.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Checklist Sections */}
        <section className="section-spacing" style={{ backgroundColor: 'var(--surface-muted)' }}>
          <div className="shell-narrow">
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
              {SECTIONS.map((section) => (
                <div key={section.id} id={section.id} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  
                  {/* Section Title */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    paddingBottom: 16,
                    borderBottom: '2px solid var(--outline)'
                  }}>
                    <div className="pill-eyebrow">
                      <span className="pill-dot" />
                      <span>{section.title}</span>
                    </div>
                    <h2 className="headline-md">
                      {section.title}
                    </h2>
                  </div>

                  {/* Items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {section.items.map((item) => {
                      const isChecked = Boolean(completedSteps[item.number]);
                      return (
                        <div
                          key={item.number}
                          onClick={() => toggleStep(item.number)}
                          className={`checklist-item ${isChecked ? 'checked' : ''}`}
                          role="checkbox"
                          aria-checked={isChecked}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleStep(item.number);
                            }
                          }}
                        >
                          <div className="checklist-checkbox">
                            {isChecked && (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </div>

                          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <p style={{
                              fontSize: 16,
                              lineHeight: 1.6,
                              color: isChecked ? 'var(--primary-ink)' : 'var(--on-surface-strong)'
                            }}>
                              <strong>{item.number}. {item.headline}</strong> {item.body}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Dark Section */}
        <section className="section-dark section-spacing">
          <div className="shell-narrow">
            <div className="section-header-stack">
              <div className="pill-eyebrow">
                <span className="pill-dot" />
                <span>KEY NUMBERS FOR THE PAGE</span>
              </div>
              <h2 className="headline-lg">
                1 rule: if it is not in writing, it did not happen.
              </h2>
              <p className="lead-text">
                A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
              </p>
            </div>

            <div className="section-dark-panel" style={{ marginTop: 32 }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 16,
                lineHeight: 1.7,
                color: '#ffffff'
              }}>
                Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="section-spacing">
          <div className="shell-narrow">
            <div className="card-callout" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
              <div className="pill-eyebrow">
                <span className="pill-dot" />
                <span>CALL TO ACTION</span>
              </div>

              <h2 className="headline-lg" style={{ color: 'var(--primary-ink)' }}>
                CALL TO ACTION
              </h2>

              <p className="lead-text" style={{ maxWidth: 580, textAlign: 'center' }}>
                Download the checklist and keep it with your invoices.
              </p>

              <p className="lead-text" style={{ maxWidth: 580, textAlign: 'center' }}>
                Share it with a friend who just bought something expensive.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginTop: 12 }} className="no-print">
                <button onClick={handlePrint} className="btn-primary">
                  Download the checklist and keep it with your invoices.
                </button>

                <button onClick={handleShare} className="btn-ghost">
                  Share it with a friend who just bought something expensive.
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: 'var(--surface-muted)',
        borderTop: '1px solid var(--outline)',
        paddingTop: 64,
        paddingBottom: 48
      }}>
        <div className="shell-container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 40,
            marginBottom: 48
          }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontWeight: 800, fontSize: 18, color: 'var(--on-surface-strong)' }}>
                CLAIM READY
              </span>
              <p style={{ fontSize: 14, color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
                A free checklist for anyone about to file a warranty claim.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="#before-anything-goes-wrong" style={{ fontSize: 13, color: 'var(--on-surface-variant)', textDecoration: 'none', fontWeight: 600 }}>
                BEFORE ANYTHING GOES WRONG
              </a>
              <a href="#when-the-fault-appears" style={{ fontSize: 13, color: 'var(--on-surface-variant)', textDecoration: 'none', fontWeight: 600 }}>
                WHEN THE FAULT APPEARS
              </a>
              <a href="#when-a-technician-visits" style={{ fontSize: 13, color: 'var(--on-surface-variant)', textDecoration: 'none', fontWeight: 600 }}>
                WHEN A TECHNICIAN VISITS
              </a>
              <a href="#if-the-claim-is-refused" style={{ fontSize: 13, color: 'var(--on-surface-variant)', textDecoration: 'none', fontWeight: 600 }}>
                IF THE CLAIM IS REFUSED
              </a>
            </div>

          </div>

          <div style={{
            paddingTop: 28,
            borderTop: '1px solid var(--outline)',
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }}>
            <div className="pill-eyebrow" style={{ width: 'fit-content' }}>
              <span className="pill-dot" />
              <span>FOOTER NOTE</span>
            </div>
            <p style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: 'var(--on-surface-variant)',
              marginTop: 6
            }}>
              Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
