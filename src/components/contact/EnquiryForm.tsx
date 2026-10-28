import { useForm, type SubmitHandler } from "react-hook-form";

export type EnquiryFormValues = {
  name: string;
  email: string;
  mobile: string;
  product: string;
  state: string;
  comments: string;
};

const PRODUCTS = [
  "Grain",
  "Spices",
  "Coffee",
  "Sago and Starch",
  "Vegetables, Herbs and Leaves",
  "Chilli",
  "Groundnut",
  "Custom-built",
];

const STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const MAX_COMMENTS = 300;

/* ---------- shared class strings ---------- */
const labelCls =
  "mb-2 block text-[11px] tracking-[0.18em] text-[#b9ad8f]";
const fieldBase =
  "w-full border border-[#d9d0bd]/80 px-4 text-[15px] text-[#0b2a21] outline-none transition " +
  "placeholder:text-[#0b2a21]/35 focus:border-[#f1ead8] focus:ring-1 focus:ring-[#f1ead8]";
const glassCls = "bg-[#d9d0bd]/45"; // translucent tan fill from the design
const inputCls = `${fieldBase} ${glassCls} h-12`;
const selectCls = `${fieldBase} h-12 appearance-none pr-11`;
const errorCls = "mt-1.5 text-[12px] text-[#e0533d]";

const Required = () => <span className="ml-1 text-[#f1ead8]">*</span>;

const Chevron = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden
    viewBox="0 0 20 20"
    className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 8l5 5 5-5" />
  </svg>
);

type Props = {
  /** Called with validated values. Throw / reject to keep the form unlocked. */
  onSubmitForm?: (values: EnquiryFormValues) => void | Promise<void>;
  className?: string;
};


export default function EnquiryForm({ onSubmitForm, className = "" }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EnquiryFormValues>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      product: "",
      state: "",
      comments: "",
    },
  });

  const commentsLength = (watch("comments") ?? "").length;

  const onSubmit: SubmitHandler<EnquiryFormValues> = async (values) => {
    await onSubmitForm?.(values);
    reset(undefined, { keepIsSubmitSuccessful: true });
  };

  return (
    /* Width is controlled by the parent column (see ContactPage.tsx) */
    <div className={`w-full ${className}`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-6"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelCls}>
            Name
            <Required />
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            className={inputCls}
            {...register("name", {
              required: "Please enter your name",
              minLength: { value: 2, message: "Name is too short" },
            })}
          />
          {errors.name && <p className={errorCls}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
            <Required />
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            className={inputCls}
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className={labelCls}>
            Mobile Number
            <Required />
          </label>
          <input
            id="mobile"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="98765 43210"
            aria-invalid={!!errors.mobile}
            className={inputCls}
            {...register("mobile", {
              required: "Please enter your mobile number",
              setValueAs: (v: string) => v.replace(/[\s-]/g, ""),
              pattern: {
                value: /^(\+91)?[6-9]\d{9}$/,
                message: "Please enter a valid 10-digit mobile number",
              },
            })}
          />
          {errors.mobile && <p className={errorCls}>{errors.mobile.message}</p>}

        </div>

        {/* Product (white select) */}
        <div>
          <label htmlFor="product" className={labelCls}>
            Product
            <Required />
          </label>
          <div className="relative">
            <select
              id="product"
              aria-invalid={!!errors.product}
              className={`${selectCls} bg-white`}
              {...register("product", { required: "Please select a product" })}
            >
              <option value="">Select a product</option>
              {PRODUCTS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <Chevron className="text-[#0b2a21]/60" />
          </div>
          {errors.product && (
            <p className={errorCls}>{errors.product.message}</p>
          )}
        </div>

        {/* State (translucent select) */}
        <div>
          <label htmlFor="state" className={labelCls}>
            States
            <Required />
          </label>
          <div className="relative">
            <select
              id="state"
              aria-invalid={!!errors.state}
              className={`${selectCls} ${glassCls}`}
              {...register("state", { required: "Please select a state" })}
            >
              <option value="">Select a state</option>
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <Chevron className="text-[#0b2a21]/50" />
          </div>
          {errors.state && <p className={errorCls}>{errors.state.message}</p>}
        </div>

        {/* Comments */}
        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <label
              htmlFor="comments"
              className="text-[11px] tracking-[0.18em] text-[#b9ad8f]"
            >
              Comments
            </label>
            <span
              className="text-[12px] tabular-nums text-[#b9ad8f]"
              aria-live="polite"
            >
              {commentsLength}/{MAX_COMMENTS}
            </span>
          </div>
          <textarea
            id="comments"
            rows={4}
            maxLength={MAX_COMMENTS}
            placeholder="Anything else we should know?"
            className={`${fieldBase} ${glassCls} min-h-24 resize-y py-3`}
            {...register("comments", {
              maxLength: {
                value: MAX_COMMENTS,
                message: `Comments can be up to ${MAX_COMMENTS} characters`,
              },
            })}
          />
          {errors.comments && (
            <p className={errorCls}>{errors.comments.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-13 min-w-32.5 bg-[#d9d0bd] px-8 text-[15px] text-[#0b2a21] transition hover:bg-[#f1ead8] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#f1ead8] disabled:cursor-not-allowed disabled:text-[#0b2a21]/50 disabled:hover:bg-[#d9d0bd]"
          >
            {isSubmitting ? "Sending…" : "Submit"}
          </button>

          {isSubmitSuccessful && (
            <p role="status" className="mt-4 text-[13px] text-[#d9d0bd]">
              Thanks, we have received your enquiry and will contact you soon.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}