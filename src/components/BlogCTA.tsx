'use client';

export default function BlogCTA({ variant = 'default' }: { variant?: 'default' | 'compact' | 'inline' }) {
  if (variant === 'inline') {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
        padding: '30px',
        borderRadius: '12px',
        margin: '40px 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ color: 'white', marginBottom: '10px', fontSize: '24px' }}>
          Ready to Transform Your CMMS Data?
        </h3>
        <p style={{ color: '#E2E8F0', marginBottom: '20px', fontSize: '16px' }}>
          Stop struggling with bad data. Start your free trial today.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="https://app.assetstage.io" 
            className="cta-button-primary"
            style={{
              background: '#10B981',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free Trial →
          </a>
          <a 
            href="/#demo" 
            className="cta-button-secondary"
            style={{
              background: 'white',
              color: '#1a365d',
              padding: '12px 30px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
            }}
          >
            Book a Demo
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div style={{
        background: '#F7FAFC',
        border: '2px solid #10B981',
        padding: '20px',
        borderRadius: '8px',
        margin: '30px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <div>
          <strong style={{ fontSize: '18px', color: '#1a365d' }}>Transform Your CMMS Data</strong>
          <p style={{ margin: '5px 0 0', color: '#4A5568' }}>6-week implementation, 90% cost savings</p>
        </div>
        <a 
          href="https://app.assetstage.io" 
          style={{
            background: '#10B981',
            color: 'white',
            padding: '10px 25px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            whiteSpace: 'nowrap'
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Free Trial
        </a>
      </div>
    );
  }

  // Default variant - full CTA section
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
      padding: '60px 20px',
      textAlign: 'center',
      margin: '60px 0'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ 
          color: 'white', 
          fontSize: '36px', 
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Stop Fighting Bad CMMS Data
        </h2>
        <p style={{ 
          color: '#E2E8F0', 
          fontSize: '20px', 
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Join hundreds of maintenance teams who transformed their CMMS data in just 6 weeks. 
          Get enterprise-quality results at 90% less cost than traditional consultants.
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <a 
            href="https://app.assetstage.io" 
            className="cta-button-primary"
            style={{
              background: '#10B981',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              display: 'inline-block',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Your Free Trial →
          </a>
          <a 
            href="/#demo" 
            className="cta-button-secondary"
            style={{
              background: 'white',
              color: '#1a365d',
              padding: '16px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              display: 'inline-block',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            Schedule a Demo
          </a>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          color: 'white'
        }}>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10B981' }}>70%</div>
            <div style={{ fontSize: '14px', color: '#E2E8F0' }}>CMMS Failure Rate</div>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10B981' }}>6 Weeks</div>
            <div style={{ fontSize: '14px', color: '#E2E8F0' }}>Implementation Time</div>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#10B981' }}>90%</div>
            <div style={{ fontSize: '14px', color: '#E2E8F0' }}>Cost Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
}