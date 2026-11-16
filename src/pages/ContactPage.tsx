import {AlertCircle, CheckCircle2, MapPin, Sprout} from 'lucide-react';
import {useState} from 'react';
import {ACTIVE_MELBOURNE_POSTCODES} from '../data/siteData';

interface B2BFormState {
  fullName: string;
  organization: string;
  email: string;
  region: string;
  serviceType: string;
  notes: string;
}

interface CommunityFormState {
  gardenerName: string;
  email: string;
  pailSize: '5 kg Pail (Balcony / Small Worm Farm)' | '10 kg Pail (Raised Beds / Community Plot)';
  pickupWindow: string;
}

export function ContactPage() {
  // B2B Consultation State
  const [b2bForm, setB2BForm] = useState<B2BFormState>({
    fullName: '',
    organization: '',
    email: '',
    region: 'Melbourne CBD & Inner North',
    serviceType: 'Commercial Waste Audit Victoria',
    notes: '',
  });
  const [b2bError, setB2BError] = useState<string | null>(null);
  const [b2bSubmitted, setB2BSubmitted] = useState(false);

  // Community Postcode Check & Booking State
  const [postcodeInput, setPostcodeInput] = useState('3065');
  const [postcodeStatus, setPostcodeStatus] = useState<{
    type: 'active' | 'regional' | 'invalid';
    message: string;
    hub?: string;
    suburb?: string;
    schedule?: string;
  }>({
    type: 'active',
    suburb: ACTIVE_MELBOURNE_POSTCODES['3065'].suburb,
    hub: ACTIVE_MELBOURNE_POSTCODES['3065'].hub,
    schedule: ACTIVE_MELBOURNE_POSTCODES['3065'].schedule,
    message: 'Active loop confirmed for Fitzroy (3065). Same-week free coffee ground pails available.',
  });

  const [communityForm, setCommunityForm] = useState<CommunityFormState>({
    gardenerName: '',
    email: '',
    pailSize: '5 kg Pail (Balcony / Small Worm Farm)',
    pickupWindow: 'Saturday Morning (8am–12pm)',
  });
  const [communityError, setCommunityError] = useState<string | null>(null);
  const [communitySubmitted, setCommunitySubmitted] = useState(false);

  const handleB2BSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setB2BError(null);

    if (!b2bForm.fullName.trim() || !b2bForm.organization.trim()) {
      setB2BError('Please enter your name and business or council organisation.');
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b2bForm.email.trim());
    if (!emailValid) {
      setB2BError('Please provide a valid work email address so our audit team can reply.');
      return;
    }

    setB2BSubmitted(true);
  };

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = postcodeInput.trim();
    const match = ACTIVE_MELBOURNE_POSTCODES[cleaned];

    if (!/^\d{4}$/.test(cleaned)) {
      setPostcodeStatus({
        type: 'invalid',
        message: 'Enter a valid 4-digit Victorian postcode (for example 3000, 3053, or 3065).',
      });
      return;
    }

    const numeric = Number(cleaned);
    if (numeric < 3000 || numeric > 3999) {
      setPostcodeStatus({
        type: 'invalid',
        message: `Postcode ${cleaned} is outside Victoria. LoopWise AI currently operates across Victoria (3000–3999).`,
      });
      return;
    }

    if (match) {
      setPostcodeStatus({
        type: 'active',
        suburb: match.suburb,
        hub: match.hub,
        schedule: match.schedule,
        message: `Active loop confirmed for ${match.suburb} (${cleaned}). Free coffee grounds for your garden are ready to reserve.`,
      });
    } else {
      setPostcodeStatus({
        type: 'regional',
        message: `Postcode ${cleaned} is in Victoria's partner expansion zone. Submit the booking form below to join the fortnightly community drop allocation.`,
      });
    }
  };

  const handleCommunitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCommunityError(null);

    if (postcodeStatus.type === 'invalid') {
      setCommunityError('Please validate a Victorian postcode (3000–3999) before booking.');
      return;
    }
    if (!communityForm.gardenerName.trim()) {
      setCommunityError('Please enter your name or community garden name.');
      return;
    }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(communityForm.email.trim());
    if (!emailValid) {
      setCommunityError('Please enter a valid email address for pickup pass confirmation.');
      return;
    }

    setCommunitySubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Sitemap Page: Contact Us — Header */}
      <section className="max-w-3xl space-y-3">
        <p className="text-xs font-medium text-[#1F5C3A]">
          Contact Us · B2B &amp; Community Booking
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#14241B]">
          Start a commercial waste audit or reserve free garden coffee grounds
        </h1>
        <p className="text-base text-[#14241B]/80 leading-relaxed">
          Choose the pathway that fits you: B2B consultation for cafés and ESG managers across
          Victoria, or instant postcode eligibility check for Melbourne households and community
          gardens.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sitemap Page: Contact Us — B2B Service Consultation Form */}
        <section
          id="b2b-consultation"
          className="scroll-mt-24 lg:col-span-6 rounded-xl bg-white border border-[#1F5C3A]/15 p-6 sm:p-8 space-y-6"
        >
          <div className="space-y-2 pb-4 border-b border-[#1F5C3A]/12">
            <div className="text-xs font-semibold text-[#1F5C3A]">
              01. Cafés, Precincts &amp; Corporate ESG
            </div>
            <h2 className="font-display text-2xl font-bold text-[#14241B]">
              Book a B2B Service Consultation
            </h2>
            <p className="text-sm text-[#14241B]/75">
              Request sustainable café waste management, coffee waste collection, or a Commercial
              Waste Audit in Victoria.
            </p>
          </div>

          {b2bSubmitted ? (
            <div className="p-6 rounded-xl bg-[#A8D5BA]/30 border border-[#1F5C3A]/20 space-y-3">
              <div className="flex items-center gap-2 text-[#1F5C3A] font-semibold">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                <span>Consultation Request Confirmed</span>
              </div>
              <p className="text-sm text-[#14241B]/85 leading-relaxed">
                Thank you, <strong>{b2bForm.fullName}</strong>. Our Melbourne onboarding specialist
                has logged a <strong>{b2bForm.serviceType}</strong> request for{' '}
                <strong>{b2bForm.organization}</strong> ({b2bForm.region}) and will email{' '}
                <span className="font-mono">{b2bForm.email}</span> within one business day.
              </p>
              <button
                type="button"
                onClick={() => {
                  setB2BSubmitted(false);
                  setB2BForm((prev) => ({...prev, notes: ''}));
                }}
                className="text-sm font-semibold text-[#1F5C3A] underline underline-offset-4 cursor-pointer"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleB2BSubmit} noValidate className="space-y-4">
              {b2bError && (
                <div
                  role="alert"
                  className="flex items-start gap-2 p-3.5 rounded-lg bg-[#E07A3F]/15 border border-[#E07A3F] text-sm text-[#14241B]"
                >
                  <AlertCircle className="w-4 h-4 text-[#CC662C] shrink-0 mt-0.5" />
                  <span>{b2bError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="b2b-name"
                    className="block text-xs font-semibold text-[#14241B] mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="b2b-name"
                    type="text"
                    required
                    value={b2bForm.fullName}
                    onChange={(e) => setB2BForm({...b2bForm, fullName: e.target.value})}
                    placeholder="Alex Taylor"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1F5C3A]/20 bg-[#F7F5EF] text-sm text-[#14241B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="b2b-org"
                    className="block text-xs font-semibold text-[#14241B] mb-1.5"
                  >
                    Café / Business / Council
                  </label>
                  <input
                    id="b2b-org"
                    type="text"
                    required
                    value={b2bForm.organization}
                    onChange={(e) => setB2BForm({...b2bForm, organization: e.target.value})}
                    placeholder="Kerr Street Espresso / City Precinct"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1F5C3A]/20 bg-[#F7F5EF] text-sm text-[#14241B]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="b2b-email"
                  className="block text-xs font-semibold text-[#14241B] mb-1.5"
                >
                  Work Email
                </label>
                <input
                  id="b2b-email"
                  type="email"
                  required
                  value={b2bForm.email}
                  onChange={(e) => setB2BForm({...b2bForm, email: e.target.value})}
                  placeholder="sustainability@organisation.com.au"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#1F5C3A]/20 bg-[#F7F5EF] text-sm text-[#14241B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="b2b-service"
                    className="block text-xs font-semibold text-[#14241B] mb-1.5"
                  >
                    Primary Service
                  </label>
                  <select
                    id="b2b-service"
                    value={b2bForm.serviceType}
                    onChange={(e) => setB2BForm({...b2bForm, serviceType: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1F5C3A]/20 bg-[#F7F5EF] text-sm text-[#14241B]"
                  >
                    <option>Commercial Waste Audit Victoria</option>
                    <option>Café Coffee Waste Collection</option>
                    <option>Soft Plastic Recycling Melbourne</option>
                    <option>Council / Precinct ESG Partnership</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="b2b-region"
                    className="block text-xs font-semibold text-[#14241B] mb-1.5"
                  >
                    Victorian Region
                  </label>
                  <select
                    id="b2b-region"
                    value={b2bForm.region}
                    onChange={(e) => setB2BForm({...b2bForm, region: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1F5C3A]/20 bg-[#F7F5EF] text-sm text-[#14241B]"
                  >
                    <option>Melbourne CBD &amp; Inner North</option>
                    <option>Inner South &amp; Bayside</option>
                    <option>Inner West &amp; Docklands</option>
                    <option>Eastern Suburbs</option>
                    <option>Regional Victoria (Geelong / Ballarat / Bendigo)</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="b2b-notes"
                  className="block text-xs font-semibold text-[#14241B] mb-1.5"
                >
                  Estimated Weekly Volume &amp; Site Notes (Optional)
                </label>
                <textarea
                  id="b2b-notes"
                  rows={3}
                  value={b2bForm.notes}
                  onChange={(e) => setB2BForm({...b2bForm, notes: e.target.value})}
                  placeholder="e.g. 40 kg coffee grounds/week, loading dock access off Little Collins St"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#1F5C3A]/20 bg-[#F7F5EF] text-sm text-[#14241B]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold bg-[#E07A3F] text-[#14241B] hover:bg-[#CC662C] hover:text-white transition-colors cursor-pointer"
              >
                Request B2B Consultation
              </button>
            </form>
          )}
        </section>

        {/* Sitemap Page: Contact Us — Community Postcode Eligibility & Booking */}
        <section
          id="community-booking"
          className="scroll-mt-24 lg:col-span-6 rounded-xl bg-[#EFECE3]/80 border border-[#1F5C3A]/15 p-6 sm:p-8 space-y-6"
        >
          <div className="space-y-2 pb-4 border-b border-[#1F5C3A]/12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F5C3A]">
              <Sprout className="w-4 h-4" aria-hidden="true" />
              <span>02. Free Community Access</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-[#14241B]">
              Free Coffee Grounds for Your Garden in Melbourne
            </h2>
            <p className="text-sm text-[#14241B]/75">
              Verify your Victorian postcode to locate the nearest café pickup hub and reserve a
              free compost pail.
            </p>
          </div>

          {/* Step A: Postcode Eligibility Check */}
          <form onSubmit={handlePostcodeCheck} className="space-y-3">
            <label
              htmlFor="vic-postcode-input"
              className="block text-xs font-semibold text-[#14241B]"
            >
              Step 1: Check Victorian Postcode Eligibility (3000–3999)
            </label>
            <div className="flex gap-2">
              <input
                id="vic-postcode-input"
                type="text"
                inputMode="numeric"
                maxLength={4}
                value={postcodeInput}
                onChange={(e) => setPostcodeInput(e.target.value)}
                placeholder="e.g. 3065"
                className="w-36 font-mono tabular-nums px-3.5 py-2.5 rounded-lg border border-[#1F5C3A]/25 bg-white text-sm text-[#14241B]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#1F5C3A] text-white hover:bg-[#143D26] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Check Postcode
              </button>
            </div>

            <div
              role="status"
              className={`p-3.5 rounded-lg border text-sm space-y-1 ${
                postcodeStatus.type === 'active'
                  ? 'bg-[#A8D5BA]/35 border-[#1F5C3A]/30 text-[#14241B]'
                  : postcodeStatus.type === 'regional'
                    ? 'bg-white border-[#1F5C3A]/20 text-[#14241B]'
                    : 'bg-[#E07A3F]/15 border-[#E07A3F] text-[#14241B]'
              }`}
            >
              <div className="flex items-start gap-2 font-medium">
                {postcodeStatus.type === 'invalid' ? (
                  <AlertCircle className="w-4 h-4 text-[#CC662C] shrink-0 mt-0.5" />
                ) : (
                  <MapPin className="w-4 h-4 text-[#1F5C3A] shrink-0 mt-0.5" />
                )}
                <span>{postcodeStatus.message}</span>
              </div>
              {postcodeStatus.hub && (
                <div className="pl-6 text-xs text-[#14241B]/75">
                  Assigned Hub: <strong className="text-[#14241B]">{postcodeStatus.hub}</strong> ·{' '}
                  {postcodeStatus.schedule}
                </div>
              )}
            </div>
          </form>

          {/* Step B: Community Online Booking Form */}
          {communitySubmitted ? (
            <div className="p-6 rounded-xl bg-white border border-[#1F5C3A]/20 space-y-3">
              <div className="flex items-center gap-2 text-[#1F5C3A] font-semibold">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                <span>Coffee Ground Pail Reserved</span>
              </div>
              <p className="text-sm text-[#14241B]/85 leading-relaxed">
                Booking pass sent to <span className="font-mono">{communityForm.email}</span> for{' '}
                <strong>{communityForm.gardenerName}</strong> ({communityForm.pailSize}) in{' '}
                <strong className="font-mono">{postcodeInput}</strong>. Bring a clean reusable tub
                or swap your LoopWise returnable pail during{' '}
                <strong>{communityForm.pickupWindow}</strong>.
              </p>
              <button
                type="button"
                onClick={() => setCommunitySubmitted(false)}
                className="text-sm font-semibold text-[#1F5C3A] underline underline-offset-4 cursor-pointer"
              >
                Book another collection
              </button>
            </div>
          ) : (
            <form onSubmit={handleCommunitySubmit} noValidate className="space-y-4 pt-2">
              <div className="text-xs font-semibold text-[#14241B]">
                Step 2: Reserve Free Pickup Pass
              </div>

              {communityError && (
                <div
                  role="alert"
                  className="flex items-start gap-2 p-3.5 rounded-lg bg-[#E07A3F]/15 border border-[#E07A3F] text-sm text-[#14241B]"
                >
                  <AlertCircle className="w-4 h-4 text-[#CC662C] shrink-0 mt-0.5" />
                  <span>{communityError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="comm-name"
                    className="block text-xs font-semibold text-[#14241B] mb-1.5"
                  >
                    Gardener or Plot Name
                  </label>
                  <input
                    id="comm-name"
                    type="text"
                    required
                    value={communityForm.gardenerName}
                    onChange={(e) =>
                      setCommunityForm({...communityForm, gardenerName: e.target.value})
                    }
                    placeholder="Samira / Northcote Plot 14"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1F5C3A]/20 bg-white text-sm text-[#14241B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="comm-email"
                    className="block text-xs font-semibold text-[#14241B] mb-1.5"
                  >
                    Email for Pickup Pass
                  </label>
                  <input
                    id="comm-email"
                    type="email"
                    required
                    value={communityForm.email}
                    onChange={(e) => setCommunityForm({...communityForm, email: e.target.value})}
                    placeholder="gardener@melbourne.org"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1F5C3A]/20 bg-white text-sm text-[#14241B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="comm-pail"
                    className="block text-xs font-semibold text-[#14241B] mb-1.5"
                  >
                    Pail Allocation
                  </label>
                  <select
                    id="comm-pail"
                    value={communityForm.pailSize}
                    onChange={(e) =>
                      setCommunityForm({
                        ...communityForm,
                        pailSize: e.target.value as CommunityFormState['pailSize'],
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1F5C3A]/20 bg-white text-sm text-[#14241B]"
                  >
                    <option>5 kg Pail (Balcony / Small Worm Farm)</option>
                    <option>10 kg Pail (Raised Beds / Community Plot)</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="comm-window"
                    className="block text-xs font-semibold text-[#14241B] mb-1.5"
                  >
                    Preferred Pickup Window
                  </label>
                  <select
                    id="comm-window"
                    value={communityForm.pickupWindow}
                    onChange={(e) =>
                      setCommunityForm({...communityForm, pickupWindow: e.target.value})
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1F5C3A]/20 bg-white text-sm text-[#14241B]"
                  >
                    <option>Saturday Morning (8am–12pm)</option>
                    <option>Wednesday Afternoon (1pm–4pm)</option>
                    <option>Friday Morning (8am–11am)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold bg-[#1F5C3A] text-white hover:bg-[#143D26] transition-colors cursor-pointer"
              >
                Confirm Free Community Pail Booking
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
