import {
  createElement,
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";

type ProductTone = "blue" | "cyan" | "violet" | "orange";

type ProductEntry = {
  id: string;
  name: string;
  targetUrl: string;
  isPrimary: boolean;
};

type Product = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
  tone: ProductTone;
  icon: ReactNode;
  launchMode: "internal" | "sso";
  entries: ProductEntry[];
  source: "built-in" | "configured";
  enabled: boolean;
};

type EntryDraft = {
  id: string;
  name: string;
  targetUrl: string;
};

type ProductDraft = {
  title: string;
  englishName: string;
  description: string;
  entryName: string;
  targetUrl: string;
  subEntries: EntryDraft[];
  tone: ProductTone;
  enabled: boolean;
};

type AccountProfile = {
  username: string;
  roleName: string;
  permissions: string[];
};

function FormInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return createElement("input", { ...props, className: "form-control" });
}

function LoginInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return createElement("input", { ...props, className: "login-control" });
}

function FormTextarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return createElement("textarea", { ...props, className: "form-control form-control--textarea" });
}

function BrandMark() {
  return <img className="brand-logo" src="/information2-logo.png" alt="Information2" />;
}

function BackupIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <ellipse cx="36" cy="20" rx="20" ry="8" stroke="currentColor" strokeWidth="3" />
      <path d="M16 20v14c0 4.4 9 8 20 8s20-3.6 20-8V20" stroke="currentColor" strokeWidth="3" />
      <path d="M16 34v12c0 4.4 9 8 20 8 3 0 5.8-.3 8.3-.8" stroke="currentColor" strokeWidth="3" />
      <path d="M48 45.5a10 10 0 1 1-3 7.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m43.8 47.4 1.3 5.5 5.5-1.3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="10" y="14" width="18" height="16" rx="4" stroke="currentColor" strokeWidth="3" />
      <rect x="44" y="42" width="18" height="16" rx="4" stroke="currentColor" strokeWidth="3" />
      <rect x="44" y="14" width="18" height="16" rx="4" stroke="currentColor" strokeWidth="3" />
      <path d="M28 22h16M53 30v12M44 50H30c-6.6 0-12-5.4-12-12v-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m39 17 5 5-5 5M49 37l5 5 5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MigrationIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <ellipse cx="19" cy="19" rx="10" ry="5" stroke="currentColor" strokeWidth="3" />
      <path d="M9 19v22c0 2.8 4.5 5 10 5 2 0 3.8-.3 5.3-.8M29 19v10" stroke="currentColor" strokeWidth="3" />
      <ellipse cx="53" cy="48" rx="10" ry="5" stroke="currentColor" strokeWidth="3" />
      <path d="M43 48v7c0 2.8 4.5 5 10 5s10-2.2 10-5v-7" stroke="currentColor" strokeWidth="3" />
      <path d="M25 36h25M44 30l6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MaskingIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M13 33c5.8-8 13.5-12 23-12s17.2 4 23 12c-5.8 8-13.5 12-23 12S18.8 41 13 33Z" stroke="currentColor" strokeWidth="3" />
      <circle cx="36" cy="33" r="7" stroke="currentColor" strokeWidth="3" />
      <path d="M19 53 53 13M45 46v7.5l-9 5-9-5V46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M16 15h40v42H16V15Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M25 27h22M25 36h12M25 45h9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="49" cy="45" r="8" stroke="currentColor" strokeWidth="3" />
      <path d="m55 51 5 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeaderIcon({
  name,
}: {
  name: "user" | "lock" | "language" | "notification" | "help";
}) {
  if (name === "user") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4.5 20c.8-4.4 3.3-6.5 7.5-6.5s6.7 2.1 7.5 6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (name === "lock") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="10" width="14" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "language") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5h9M8.5 3v2M6 8c1.2 3.2 3.3 5.6 6.2 7.2M12 8c-1.2 3.1-3.3 5.5-6.5 7.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="m14 19 3.5-9 3.5 9M15.2 16h4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "notification") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 9a6 6 0 0 1 12 0v5l2 3H4l2-3V9Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9.5 20h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9.7 9a2.4 2.4 0 1 1 3.7 2c-.9.6-1.4 1.1-1.4 2.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

function LoginIllustration() {
  return (
    <svg className="login-illustration" viewBox="0 0 760 560" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="platform" x1="160" y1="170" x2="565" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DCEAFF" />
          <stop offset="1" stopColor="#7CA5F4" />
        </linearGradient>
        <linearGradient id="server" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#5E8DF2" />
          <stop offset="1" stopColor="#214DBE" />
        </linearGradient>
        <linearGradient id="cloud" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#6D99FF" />
          <stop offset="1" stopColor="#315DD8" />
        </linearGradient>
        <filter id="illustration-shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#3262B3" floodOpacity=".18" />
        </filter>
      </defs>

      <g opacity=".42" stroke="#55CFE6" strokeWidth="2">
        <path d="M108 431 270 338M503 414l126-72M527 250l93-54" />
        <circle cx="98" cy="437" r="44" />
        <circle cx="98" cy="437" r="65" opacity=".45" />
        <circle cx="643" cy="187" r="33" />
      </g>

      <g filter="url(#illustration-shadow)">
        <path d="m151 352 231-135 226 132-230 136-227-133Z" fill="#6F91E8" />
        <path d="m151 352 227 133v34L151 386v-34Z" fill="#466BC8" />
        <path d="m378 485 230-136v34L378 519v-34Z" fill="#2854B8" />
        <path d="m178 342 204-119 199 116-203 121-200-118Z" fill="url(#platform)" />
      </g>

      <g transform="translate(226 183)" filter="url(#illustration-shadow)">
        <path d="m0 29 43-25 42 25-43 25L0 29Z" fill="#91B8FF" />
        <path d="m0 29 42 25v121L0 151V29Z" fill="url(#server)" />
        <path d="m42 54 43-25v121l-43 25V54Z" fill="#183FA9" />
        <g stroke="#B9D2FF" strokeWidth="4" strokeLinecap="round">
          <path d="m12 53 19 11M12 69l19 11M12 85l19 11M12 119l19 11" />
        </g>
        <circle cx="14" cy="143" r="3" fill="#5DE1DE" />
      </g>

      <g transform="translate(320 123)" filter="url(#illustration-shadow)">
        <path d="m0 29 43-25 42 25-43 25L0 29Z" fill="#A9C7FF" />
        <path d="m0 29 42 25v144L0 174V29Z" fill="url(#server)" />
        <path d="m42 54 43-25v144l-43 25V54Z" fill="#183FA9" />
        <g stroke="#C7DBFF" strokeWidth="4" strokeLinecap="round">
          <path d="m12 53 19 11M12 69l19 11M12 85l19 11M12 119l19 11M12 135l19 11" />
        </g>
        <circle cx="14" cy="166" r="3" fill="#5DE1DE" />
      </g>

      <g transform="translate(418 194)" filter="url(#illustration-shadow)">
        <path d="m0 29 43-25 42 25-43 25L0 29Z" fill="#91B8FF" />
        <path d="m0 29 42 25v116L0 146V29Z" fill="url(#server)" />
        <path d="m42 54 43-25v116l-43 25V54Z" fill="#183FA9" />
        <g stroke="#C7DBFF" strokeWidth="4" strokeLinecap="round">
          <path d="m12 53 19 11M12 69l19 11M12 85l19 11M12 119l19 11" />
        </g>
      </g>

      <g transform="translate(376 302)" filter="url(#illustration-shadow)">
        <path
          d="M29 91C12 91 0 79 0 63c0-14 10-26 24-28C30 15 46 3 66 3c20 0 37 13 43 31 4-2 9-3 14-3 19 0 34 15 34 34s-15 34-34 34H29v-8Z"
          fill="url(#cloud)"
        />
        <path d="m62 50 18-11 18 11v21L80 82 62 71V50Z" fill="white" fillOpacity=".92" />
        <path d="M80 39v43M62 50l18 11 18-11" stroke="#3470E8" strokeWidth="3" />
      </g>

      <g transform="translate(66 392)" filter="url(#illustration-shadow)">
        <path d="m0 28 49-28 49 28-49 29L0 28Z" fill="#B8CFFF" />
        <path d="m0 28 49 29v25L0 53V28Z" fill="#779BE8" />
        <path d="m49 57 49-29v25L49 82V57Z" fill="#4A6FC8" />
        <text x="31" y="38" fill="#2857C7" fontSize="13" fontWeight="700">DB</text>
      </g>

      <g transform="translate(610 144)" filter="url(#illustration-shadow)">
        <path d="m0 22 38-22 38 22-38 22L0 22Z" fill="#C7D9FF" />
        <path d="m0 22 38 22v20L0 42V22Z" fill="#7298E8" />
        <path d="m38 44 38-22v20L38 64V44Z" fill="#476CC7" />
        <text x="23" y="29" fill="#2857C7" fontSize="11" fontWeight="700">API</text>
      </g>

      <g transform="translate(72 88)">
        <rect width="184" height="64" rx="16" fill="white" fillOpacity=".72" />
        <circle cx="32" cy="32" r="15" fill="#E8F2FF" />
        <path d="M25 32h14M32 25v14" stroke="#2768DF" strokeWidth="2.5" strokeLinecap="round" />
        <text x="58" y="27" fill="#667892" fontSize="10">UNIFIED DATA FABRIC</text>
        <text x="58" y="45" fill="#10213B" fontSize="14" fontWeight="700">数据服务稳定运行</text>
      </g>
    </svg>
  );
}

function ProductCard({
  product,
  onEnter,
}: {
  product: Product;
  onEnter: (product: Product, entry: ProductEntry) => void;
}) {
  const [entryMenuOpen, setEntryMenuOpen] = useState(false);
  const primaryEntry =
    product.entries.find((entry) => entry.isPrimary) ?? product.entries[0];
  const activate = () => {
    if (primaryEntry) onEnter(product, primaryEntry);
  };

  return (
    <div
      className={`product-card product-card--${product.tone}`}
      role="group"
      aria-label={`${product.title}产品卡片`}
    >
      <div className="product-card__accent" />
      <div className="product-card__topline">
        <span className="product-card__eyebrow">{product.eyebrow}</span>
      </div>

      <div className="product-card__content">
        <div className="product-icon">{product.icon}</div>
        <div className="product-copy">
          <p className="product-title">{product.title}</p>
          <p className="product-description">{product.description}</p>
        </div>
      </div>

      <div className="capability-list">
        {product.capabilities.map((capability) => (
          <span className="capability" key={capability}>
            <span className="capability__check">✓</span>
            {capability}
          </span>
        ))}
      </div>

      <div className="product-card__footer">
        {product.entries.length > 1 ? (
          <span
            className={`entry-primary-trigger ${entryMenuOpen ? "entry-primary-trigger--active" : ""}`}
            role="button"
            tabIndex={0}
            aria-expanded={entryMenuOpen}
            onClick={(event) => {
              event.stopPropagation();
              setEntryMenuOpen((current) => !current);
            }}
            onKeyDown={(event) => {
              event.stopPropagation();
              if (event.key === "Enter" || event.key === " ") {
                setEntryMenuOpen((current) => !current);
              }
            }}
          >
            <span className="entry-primary-trigger__prefix">进入</span>
            <span className="entry-primary-trigger__divider" />
            <span className="entry-primary-trigger__name">
              {primaryEntry?.name ?? "产品"}
            </span>
            <span className="entry-primary-trigger__chevron">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m5 6.5 3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </span>
        ) : (
          <span
            className="enter-label"
            role="button"
            tabIndex={0}
            onClick={activate}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") activate();
            }}
          >
            {primaryEntry ? `进入 · ${primaryEntry.name}` : "进入产品"}
          </span>
        )}
        <div className="product-entry-actions">
          <span
            className="enter-arrow"
            role="button"
            tabIndex={0}
            aria-label={`进入${primaryEntry?.name ?? product.title}`}
            onClick={activate}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") activate();
            }}
          >
            <ArrowIcon />
          </span>
        </div>

        {entryMenuOpen && (
          <div
            className="product-entry-menu"
            role="menu"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="product-entry-menu__header">
              <span>
                <strong>选择产品入口</strong>
                <small>选择要访问的业务控制台</small>
              </span>
              <em>{product.entries.length}</em>
            </div>
            {product.entries.map((entry, index) => (
              <div
                className="product-entry-menu__item"
                role="menuitem"
                tabIndex={0}
                key={entry.id}
                onClick={() => {
                  setEntryMenuOpen(false);
                  onEnter(product, entry);
                }}
                onKeyDown={(event) => {
                  event.stopPropagation();
                  if (event.key === "Enter" || event.key === " ") {
                    setEntryMenuOpen(false);
                    onEnter(product, entry);
                  }
                }}
              >
                <span className="product-entry-menu__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="product-entry-menu__copy">
                  <strong>{entry.name}</strong>
                  <small>{entry.targetUrl}</small>
                </span>
                {entry.isPrimary && <em className="product-entry-menu__primary">主入口</em>}
                <span className="product-entry-menu__arrow">
                  <ArrowIcon />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const productCatalog: Product[] = [
  {
    id: "disaster-recovery",
    eyebrow: "DISASTER RECOVERY",
    title: "容灾备份",
    description: "面向核心业务的统一数据保护平台，提供持续复制、备份与快速恢复能力。",
    capabilities: ["容灾&迁移", "备份&恢复", "云灾备", "数据分层"],
    tone: "blue",
    icon: <BackupIcon />,
    launchMode: "internal",
    entries: [
      {
        id: "disaster-recovery-primary",
        name: "管理控制台",
        targetUrl: "/disaster-recovery",
        isPrimary: true,
      },
    ],
    source: "built-in",
    enabled: true,
  },
  {
    id: "data-integration",
    eyebrow: "DATA INTEGRATION",
    title: "数据集成",
    description: "实时打通异构数据壁垒，护航企业核心系统平滑演进",
    capabilities: ["多源异构支持", "秒级实时同步", "DDL\\DML一体化", "数据一致性&差异修复"],
    tone: "cyan",
    icon: <IntegrationIcon />,
    launchMode: "internal",
    entries: [
      {
        id: "data-integration-primary",
        name: "集成控制台",
        targetUrl: "/data-integration",
        isPrimary: true,
      },
      {
        id: "data-integration-tasks",
        name: "任务管理中心",
        targetUrl: "/data-integration/tasks",
        isPrimary: false,
      },
      {
        id: "data-integration-links",
        name: "链路监控中心",
        targetUrl: "/data-integration/links",
        isPrimary: false,
      },
    ],
    source: "built-in",
    enabled: true,
  },
  {
    id: "data-migration",
    eyebrow: "DATA MIGRATION",
    title: "数据迁移",
    description: "面向数据库升级、上云与系统替换场景，提供低停机、可验证的数据迁移服务。",
    capabilities: ["异构迁移", "全量与增量", "迁移校验"],
    tone: "violet",
    icon: <MigrationIcon />,
    launchMode: "sso",
    entries: [
      {
        id: "data-migration-primary",
        name: "迁移控制台",
        targetUrl: "https://migration.information2.com",
        isPrimary: true,
      },
    ],
    source: "configured",
    enabled: false,
  },
  {
    id: "data-masking",
    eyebrow: "DATA MASKING",
    title: "数据脱敏",
    description: "保护敏感数据在开发、测试及共享场景中的安全使用，降低数据泄露风险。",
    capabilities: ["敏感数据发现", "动态脱敏", "脱敏策略"],
    tone: "orange",
    icon: <MaskingIcon />,
    launchMode: "sso",
    entries: [
      {
        id: "data-masking-primary",
        name: "脱敏控制台",
        targetUrl: "https://masking.information2.com",
        isPrimary: true,
      },
    ],
    source: "configured",
    enabled: false,
  },
];

// 后续可直接使用接口返回的模块 ID 替换此清单。
const installedModuleIds = new Set([
  "disaster-recovery",
  "data-integration",
  "data-migration",
  "data-masking",
]);

// 实际项目中由登录会话或权限接口返回；当前原型使用 admin 账号。
const accountProfiles = {
  admin: {
    username: "admin",
    roleName: "管理员",
    permissions: [] as string[],
  },
  sysadmin: {
    username: "sysadmin",
    roleName: "超级管理员",
    permissions: ["portal:entry:manage"] as string[],
  },
} satisfies Record<string, AccountProfile>;

function LoginPage({ onLogin }: { onLogin: (account: AccountProfile) => void }) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("Info1234");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const login = () => {
    const account = accountProfiles[username.trim().toLowerCase() as keyof typeof accountProfiles];
    if (!account || password !== "Info1234") {
      setError("用户名或密码错误，请检查后重新登录");
      return;
    }

    setError("");
    onLogin(account);
  };

  return (
    <div className="login-screen">
      <div className="login-orb login-orb--one" />
      <div className="login-orb login-orb--two" />
      <header className="login-header">
        <div className="brand">
          <BrandMark />
        </div>
        <span className="login-language">简体中文</span>
      </header>

      <main className="login-layout">
        <section className="login-visual">
          <LoginIllustration />
        </section>

        <section className="login-panel-wrap">
          <div className="login-panel">
            <p className="login-panel__title">统一数据管理平台</p>

            <div className="login-form">
              <label className="login-field">
                <span className="login-field__label">用户名</span>
                <span className="login-field__control">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M4 17c.5-3.2 2.5-5 6-5s5.5 1.8 6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <LoginInput
                    value={username}
                    autoComplete="username"
                    placeholder="请输入用户名"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setUsername(event.target.value);
                      setError("");
                    }}
                  />
                </span>
              </label>

              <label className="login-field">
                <span className="login-field__label">密码</span>
                <span className="login-field__control">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M7 9V6.5a3 3 0 0 1 6 0V9" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  <LoginInput
                    type={showPassword ? "text" : "password"}
                    value={password}
                    autoComplete="current-password"
                    placeholder="请输入密码"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setPassword(event.target.value);
                      setError("");
                    }}
                    onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                      if (event.key === "Enter") login();
                    }}
                  />
                  <span
                    className="password-toggle"
                    role="button"
                    tabIndex={0}
                    aria-label={showPassword ? "隐藏密码" : "显示密码"}
                    onClick={() => setShowPassword((current) => !current)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        setShowPassword((current) => !current);
                      }
                    }}
                  >
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M2.5 10s2.7-4 7.5-4 7.5 4 7.5 4-2.7 4-7.5 4-7.5-4-7.5-4Z" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </span>
              </label>

              <div className={`login-error ${error ? "login-error--visible" : ""}`} role="alert">
                {error || "登录信息校验提示"}
              </div>

              <div
                className="login-submit"
                role="button"
                tabIndex={0}
                onClick={login}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") login();
                }}
              >
                登录
                <ArrowIcon />
              </div>
            </div>

          </div>
          <p className="login-copyright">© 2026 Information2 · 企业数据服务平台</p>
        </section>
      </main>
    </div>
  );
}

function ConfigPage({
  products,
  onCreate,
  onEdit,
  onReorder,
  onToggle,
}: {
  products: Product[];
  onCreate: () => void;
  onEdit: (product: Product) => void;
  onReorder: (sourceId: string, targetId: string) => void;
  onToggle: (id: string) => void;
}) {
  const [draggedProductId, setDraggedProductId] = useState<string | null>(null);
  const configuredCount = products.filter((product) => product.source === "configured").length;
  const enabledCount = products.filter((product) => product.enabled).length;

  return (
    <main className="config-page">
      <section className="config-heading">
        <div>
          <span className="config-heading__eyebrow">PORTAL MANAGEMENT</span>
          <p className="config-heading__title">产品配置</p>
          <p className="config-heading__description">
            集中管理 Portal 展示的产品卡片，配置外部产品地址与访问方式。
          </p>
        </div>
        <div
          className="primary-action"
          role="button"
          tabIndex={0}
          onClick={onCreate}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") onCreate();
          }}
        >
          <span className="primary-action__plus">+</span>
          新建产品卡片
        </div>
      </section>

      <section className="config-summary" aria-label="配置概览">
        <div className="summary-item">
          <span className="summary-item__label">卡片总数</span>
          <strong className="summary-item__value">{products.length}</strong>
          <span className="summary-item__hint">包含内置与配置卡片</span>
        </div>
        <div className="summary-item">
          <span className="summary-item__label">Portal 展示中</span>
          <strong className="summary-item__value summary-item__value--success">{enabledCount}</strong>
          <span className="summary-item__hint">当前对管理员可见</span>
        </div>
        <div className="summary-item">
          <span className="summary-item__label">后台配置卡片</span>
          <strong className="summary-item__value">{configuredCount}</strong>
          <span className="summary-item__hint">由配置中心统一维护</span>
        </div>
      </section>

      <section className="config-panel">
        <div className="config-panel__header">
          <div>
            <p className="config-panel__title">产品卡片</p>
            <p className="config-panel__subtitle">拖动排序将在发布后同步至 Portal</p>
          </div>
          <div className="config-legend">
            <span className="config-legend__dot" />
            保存后同步更新 Portal
          </div>
        </div>

        <div className="config-table__head">
          <span>产品信息</span>
          <span>卡片来源</span>
          <span>访问地址 / 方式</span>
          <span>Portal 展示</span>
          <span>操作</span>
        </div>

        <div className="config-list">
          {products.map((product, index) => (
            <div
              className={`config-row ${draggedProductId === product.id ? "config-row--dragging" : ""}`}
              draggable
              key={product.id}
              onDragStart={() => setDraggedProductId(product.id)}
              onDragOver={(event) => event.preventDefault()}
              onDrop={() => {
                if (draggedProductId && draggedProductId !== product.id) {
                  onReorder(draggedProductId, product.id);
                }
                setDraggedProductId(null);
              }}
              onDragEnd={() => setDraggedProductId(null)}
            >
              <span className="drag-handle" aria-label={`排序 ${product.title}`}>
                ⠿
              </span>
              <span className="config-row__order">{String(index + 1).padStart(2, "0")}</span>
              <div className={`config-row__icon product-card--${product.tone}`}>
                <span className="product-icon">{product.icon}</span>
              </div>
              <div className="config-row__product">
                <p className="config-row__name">{product.title}</p>
                <span className="config-row__eyebrow">{product.eyebrow}</span>
              </div>
              <div className="config-row__source">
                <span
                  className={`source-badge ${product.source === "configured" ? "source-badge--configured" : ""}`}
                >
                  {product.source === "configured" ? "后台配置" : "内置产品"}
                </span>
              </div>
              <div className="config-row__access">
                <p>
                  {product.entries.find((entry) => entry.isPrimary)?.targetUrl ?? "未配置"}
                </p>
                <span>
                  {product.launchMode === "sso" ? "统一认证跳转" : "平台内访问"}
                  {product.entries.length > 1 && ` · ${product.entries.length} 个入口`}
                </span>
              </div>
              <div className="config-row__visibility">
                <div
                  className={`visibility-switch ${product.enabled ? "visibility-switch--on" : ""}`}
                  role="switch"
                  tabIndex={0}
                  aria-checked={product.enabled}
                  aria-label={`${product.enabled ? "隐藏" : "展示"}${product.title}`}
                  onClick={() => onToggle(product.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") onToggle(product.id);
                  }}
                >
                  <span />
                </div>
                <span>{product.enabled ? "展示中" : "已隐藏"}</span>
              </div>
              <div className="config-row__actions">
                <span
                  className="row-action"
                  role="button"
                  tabIndex={0}
                  onClick={() => onEdit(product)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") onEdit(product);
                  }}
                >
                  编辑
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProductCardDrawer({
  mode,
  source,
  previewIcon,
  draft,
  onChange,
  onAddEntry,
  onEntryChange,
  onRemoveEntry,
  onToggleVisibility,
  onClose,
  onSave,
}: {
  mode: "create" | "edit";
  source: Product["source"];
  previewIcon: ReactNode;
  draft: ProductDraft;
  onChange: (field: keyof ProductDraft, value: string) => void;
  onAddEntry: () => void;
  onEntryChange: (id: string, field: "name" | "targetUrl", value: string) => void;
  onRemoveEntry: (id: string) => void;
  onToggleVisibility: () => void;
  onClose: () => void;
  onSave: () => void;
}) {
  const isEdit = mode === "edit";
  const isBuiltIn = source === "built-in";

  return (
    <div
      className="drawer-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside className="product-drawer" aria-label={isEdit ? "编辑产品卡片" : "新建产品卡片"}>
        <div className="drawer-header">
          <div>
            <span className="drawer-header__eyebrow">
              {isEdit ? "EDIT PRODUCT CARD" : "NEW PRODUCT CARD"}
            </span>
            <p className="drawer-header__title">{isEdit ? "编辑产品卡片" : "新建产品卡片"}</p>
            <p className="drawer-header__description">
              {isEdit
                ? "修改卡片信息并保存后，将同步更新 Portal 页面。"
                : "配置完成并启用后，将自动展示在 Portal 页面。"}
            </p>
            {isEdit && (
              <span
                className={`drawer-source-badge ${isBuiltIn ? "" : "drawer-source-badge--configured"}`}
              >
                {isBuiltIn ? "内置产品" : "后台配置"}
              </span>
            )}
          </div>
          <div
            className="drawer-close"
            role="button"
            tabIndex={0}
            aria-label="关闭"
            onClick={onClose}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") onClose();
            }}
          >
            ×
          </div>
        </div>

        <div className="drawer-content">
          <div className="drawer-form">
            <div className="form-section">
              <div className="form-section__heading">
                <span className="form-section__index">01</span>
                <div>
                  <p className="form-section__title">基础信息</p>
                  <span>用于 Portal 产品卡片展示</span>
                </div>
              </div>

              <label className="form-field">
                <span className="form-label">
                  产品名称 <i>*</i>
                </span>
                <FormInput
                  value={draft.title}
                  placeholder="例如：数据质量"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onChange("title", event.target.value)
                  }
                />
              </label>

              <label className="form-field">
                <span className="form-label">英文标识</span>
                <FormInput
                  value={draft.englishName}
                  placeholder="例如：DATA QUALITY"
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    onChange("englishName", event.target.value)
                  }
                />
              </label>

              <label className="form-field">
                <span className="form-label">产品描述</span>
                <FormTextarea
                  value={draft.description}
                  placeholder="简要描述产品定位和核心能力"
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                    onChange("description", event.target.value)
                  }
                />
                <span className="form-help">建议不超过 50 个中文字符</span>
              </label>

              <div className="form-field">
                <span className="form-label">主题色</span>
                <div className="tone-options">
                  {(["blue", "cyan", "violet", "orange"] as ProductTone[]).map((tone) => (
                    <div
                      className={`tone-option tone-option--${tone} ${draft.tone === tone ? "tone-option--selected" : ""}`}
                      role="button"
                      tabIndex={0}
                      aria-label={`选择${tone}主题`}
                      key={tone}
                      onClick={() => onChange("tone", tone)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") onChange("tone", tone);
                      }}
                    >
                      <span />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-section__heading">
                <span className="form-section__index">02</span>
                <div>
                  <p className="form-section__title">访问配置</p>
                  <span>配置产品地址与身份认证方式</span>
                </div>
              </div>

              <div className="entry-config-block">
                <div className="entry-config-block__heading">
                  <div>
                    <span className="form-label">主入口</span>
                    <span>默认点击产品卡片时进入，始终保留</span>
                  </div>
                  <span className="primary-entry-badge">默认</span>
                </div>
                <div className="entry-config-fields">
                  <label className="form-field">
                    <span className="form-label">
                      入口名称 <i>*</i>
                    </span>
                    <FormInput
                      value={draft.entryName}
                      placeholder="例如：管理控制台"
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        onChange("entryName", event.target.value)
                      }
                    />
                  </label>
                  <label className="form-field">
                    <span className="form-label">
                      访问链接 <i>*</i>
                    </span>
                    <FormInput
                      value={draft.targetUrl}
                      placeholder={isBuiltIn ? "/product-path" : "https://product.example.com"}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        onChange("targetUrl", event.target.value)
                      }
                    />
                  </label>
                </div>
              </div>

              <div className="sub-entry-config">
                <div className="sub-entry-config__heading">
                  <div>
                    <span className="form-label">子入口</span>
                    <span>为同一产品增加不同业务场景的快捷入口</span>
                  </div>
                  <span>{draft.subEntries.length} 个</span>
                </div>

                {draft.subEntries.map((entry, index) => (
                  <div className="sub-entry-row" key={entry.id}>
                    <span className="sub-entry-row__index">{String(index + 1).padStart(2, "0")}</span>
                    <FormInput
                      value={entry.name}
                      placeholder="子入口名称"
                      aria-label={`第 ${index + 1} 个子入口名称`}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        onEntryChange(entry.id, "name", event.target.value)
                      }
                    />
                    <FormInput
                      value={entry.targetUrl}
                      placeholder={isBuiltIn ? "/product/sub-path" : "https://sub.example.com"}
                      aria-label={`第 ${index + 1} 个子入口链接`}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        onEntryChange(entry.id, "targetUrl", event.target.value)
                      }
                    />
                    <span
                      className="sub-entry-row__remove"
                      role="button"
                      tabIndex={0}
                      aria-label={`删除${entry.name || `第 ${index + 1} 个子入口`}`}
                      onClick={() => onRemoveEntry(entry.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") onRemoveEntry(entry.id);
                      }}
                    >
                      ×
                    </span>
                  </div>
                ))}

                <div
                  className="add-entry-action"
                  role="button"
                  tabIndex={0}
                  onClick={onAddEntry}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") onAddEntry();
                  }}
                >
                  <span>+</span>
                  添加子入口
                </div>
              </div>

              <div className="form-field">
                <span className="form-label">访问方式</span>
                <div className="access-option access-option--selected">
                  <span className="access-option__radio" />
                  <div>
                    <p>{isBuiltIn ? "平台内访问" : "统一认证跳转"}</p>
                    <span>
                      {isBuiltIn
                        ? "该产品属于当前平台，访问方式不可修改"
                        : "使用当前管理员身份免登录访问目标产品"}
                    </span>
                  </div>
                  <span className="recommended-badge">{isBuiltIn ? "内置" : "推荐"}</span>
                </div>
              </div>

              <div className="publish-option">
                <div>
                  <p>{draft.enabled ? "保存后在 Portal 展示" : "保存后暂不展示"}</p>
                  <span>
                    {isEdit
                      ? "该设置将同步更新当前产品卡片的展示状态"
                      : "创建后仍可在产品配置列表中调整"}
                  </span>
                </div>
                <div
                  className={`visibility-switch ${draft.enabled ? "visibility-switch--on" : ""}`}
                  role="switch"
                  tabIndex={0}
                  aria-checked={draft.enabled}
                  onClick={onToggleVisibility}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") onToggleVisibility();
                  }}
                >
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="drawer-preview">
            <div className="preview-heading">
              <span>PORTAL PREVIEW</span>
              <p>卡片预览</p>
            </div>
            <div className={`preview-card product-card--${draft.tone}`}>
              <div className="product-card__accent" />
              <div className="preview-card__content">
                <div className="product-icon">
                  {previewIcon}
                </div>
                <p>{draft.title || "产品名称"}</p>
                <span>{draft.englishName || "PRODUCT NAME"}</span>
                <em>{draft.description || "产品描述将显示在这里，帮助用户快速了解产品能力。"}</em>
              </div>
              <div className="preview-card__footer">
                <span className={draft.subEntries.length > 0 ? "preview-primary-trigger" : ""}>
                  {`进入 · ${draft.entryName || "主入口"}`}
                  {draft.subEntries.length > 0 && <span>⌄</span>}
                </span>
                <div className="preview-entry-actions">
                  <span className="enter-arrow">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </div>
            <div className="preview-note">
              <span>i</span>
              实际卡片宽度将根据 Portal 页面自适应
            </div>
          </div>
        </div>

        <div className="drawer-footer">
          <span className="drawer-footer__hint">带 * 的项目为必填项</span>
          <div className="drawer-actions">
            <div className="drawer-action drawer-action--secondary" role="button" tabIndex={0} onClick={onClose}>
              取消
            </div>
            <div
              className="drawer-action drawer-action--primary"
              role="button"
              tabIndex={0}
              onClick={onSave}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") onSave();
              }}
            >
              {isEdit ? "保存更改" : "保存并发布"}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default function App() {
  const [sessionUser, setSessionUser] = useState<AccountProfile | null>(null);
  const [message, setMessage] = useState("");
  const messageTimer = useRef<number | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [page, setPage] = useState<"portal" | "config">("portal");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>(() =>
    productCatalog.filter((product) => installedModuleIds.has(product.id)),
  );
  const [draft, setDraft] = useState<ProductDraft>({
    title: "数据质量",
    englishName: "DATA QUALITY",
    description: "持续发现数据质量问题，建立可度量、可追踪的数据质量管理体系。",
    entryName: "管理控制台",
    targetUrl: "https://quality.information2.com",
    subEntries: [],
    tone: "blue",
    enabled: true,
  });
  const installedProducts = products.filter((product) => product.enabled);
  const editingProduct = products.find((product) => product.id === editingProductId);

  if (!sessionUser) {
    return <LoginPage onLogin={setSessionUser} />;
  }

  const canManageEntries = sessionUser.permissions.includes("portal:entry:manage");

  const showMessage = (content: string, duration = 1800) => {
    if (messageTimer.current) window.clearTimeout(messageTimer.current);
    setMessage(content);
    messageTimer.current = window.setTimeout(() => {
      setMessage("");
      messageTimer.current = null;
    }, duration);
  };

  const enterProduct = (product: Product, entry: ProductEntry) => {
    showMessage(`正在进入${product.title} · ${entry.name}…`);
  };

  const showHeaderMessage = (content: string) => {
    showMessage(content);
  };

  const exitSession = () => {
    setSessionUser(null);
    setPage("portal");
    setDrawerOpen(false);
    setEditingProductId(null);
    setUserMenuOpen(false);
    if (messageTimer.current) window.clearTimeout(messageTimer.current);
    messageTimer.current = null;
    setMessage("");
  };

  const toggleProduct = (id: string) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id ? { ...product, enabled: !product.enabled } : product,
      ),
    );
  };

  const reorderProducts = (sourceId: string, targetId: string) => {
    setProducts((current) => {
      const sourceIndex = current.findIndex((product) => product.id === sourceId);
      const targetIndex = current.findIndex((product) => product.id === targetId);
      if (sourceIndex < 0 || targetIndex < 0) return current;

      const next = [...current];
      const [movedProduct] = next.splice(sourceIndex, 1);
      next.splice(targetIndex, 0, movedProduct);
      return next;
    });
  };

  const openCreateDrawer = () => {
    setEditingProductId(null);
    setDraft({
      title: "数据质量",
      englishName: "DATA QUALITY",
      description: "持续发现数据质量问题，建立可度量、可追踪的数据质量管理体系。",
      entryName: "管理控制台",
      targetUrl: "https://quality.information2.com",
      subEntries: [],
      tone: "blue",
      enabled: true,
    });
    setDrawerOpen(true);
  };

  const openEditDrawer = (product: Product) => {
    const primaryEntry =
      product.entries.find((entry) => entry.isPrimary) ?? product.entries[0];
    setEditingProductId(product.id);
    setDraft({
      title: product.title,
      englishName: product.eyebrow,
      description: product.description,
      entryName: primaryEntry?.name ?? "管理控制台",
      targetUrl: primaryEntry?.targetUrl ?? "",
      subEntries: product.entries
        .filter((entry) => !entry.isPrimary)
        .map((entry) => ({
          id: entry.id,
          name: entry.name,
          targetUrl: entry.targetUrl,
        })),
      tone: product.tone,
      enabled: product.enabled,
    });
    setDrawerOpen(true);
  };

  const closeProductDrawer = () => {
    setDrawerOpen(false);
    setEditingProductId(null);
  };

  const addSubEntry = () => {
    if (draft.subEntries.length >= 5) {
      showMessage("每个产品最多配置 5 个子入口", 2000);
      return;
    }

    setDraft((current) => ({
      ...current,
      subEntries: [
        ...current.subEntries,
        {
          id: `entry-${Date.now()}`,
          name: "",
          targetUrl: "",
        },
      ],
    }));
  };

  const updateSubEntry = (
    id: string,
    field: "name" | "targetUrl",
    value: string,
  ) => {
    setDraft((current) => ({
      ...current,
      subEntries: current.subEntries.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry,
      ),
    }));
  };

  const removeSubEntry = (id: string) => {
    setDraft((current) => ({
      ...current,
      subEntries: current.subEntries.filter((entry) => entry.id !== id),
    }));
  };

  const saveProduct = () => {
    if (!draft.title.trim() || !draft.entryName.trim() || !draft.targetUrl.trim()) {
      showMessage("请填写产品名称、主入口名称和访问链接", 2000);
      return;
    }

    if (draft.subEntries.some((entry) => !entry.name.trim() || !entry.targetUrl.trim())) {
      showMessage("请完善所有子入口的名称和访问链接", 2000);
      return;
    }

    const productId = editingProduct?.id ?? `configured-${Date.now()}`;
    const currentPrimary = editingProduct?.entries.find((entry) => entry.isPrimary);
    const entries: ProductEntry[] = [
      {
        id: currentPrimary?.id ?? `${productId}-primary`,
        name: draft.entryName.trim(),
        targetUrl: draft.targetUrl.trim(),
        isPrimary: true,
      },
      ...draft.subEntries.map((entry) => ({
        id: entry.id,
        name: entry.name.trim(),
        targetUrl: entry.targetUrl.trim(),
        isPrimary: false,
      })),
    ];

    if (editingProduct) {
      setProducts((current) =>
        current.map((product) =>
          product.id === editingProduct.id
            ? {
                ...product,
                title: draft.title.trim(),
                eyebrow: draft.englishName.trim().toUpperCase() || product.eyebrow,
                description: draft.description.trim() || product.description,
                tone: draft.tone,
                entries,
                enabled: draft.enabled,
              }
            : product,
        ),
      );
      closeProductDrawer();
      showMessage(`${draft.title.trim()}卡片配置已更新`, 2400);
      return;
    }

    const product: Product = {
      id: productId,
      eyebrow: draft.englishName.trim().toUpperCase() || "CONFIGURED PRODUCT",
      title: draft.title.trim(),
      description: draft.description.trim() || "由管理员配置的企业级数据产品卡片。",
      capabilities: ["统一管理", "灵活配置", "安全访问"],
      tone: draft.tone,
      icon: <QualityIcon />,
      launchMode: "sso",
      entries,
      source: "configured",
      enabled: draft.enabled,
    };

    setProducts((current) => [...current, product]);
    closeProductDrawer();
    showMessage(`${product.title}卡片已发布到 Portal`, 2400);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <BrandMark />
        </div>

        {canManageEntries && (
          <nav className="admin-nav" aria-label="主导航">
            <div
              className={`admin-nav__item ${page === "portal" ? "admin-nav__item--active" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => setPage("portal")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setPage("portal");
              }}
            >
              产品门户
            </div>
            <div
              className={`admin-nav__item ${page === "config" ? "admin-nav__item--active" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => setPage("config")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setPage("config");
              }}
            >
              产品配置
            </div>
          </nav>
        )}

        <div className="header-toolbar" aria-label="系统工具栏">
          <div
            className={`header-tool header-tool--user ${userMenuOpen ? "header-tool--active" : ""}`}
            role="button"
            tabIndex={0}
            aria-label={`当前用户：${sessionUser.username}`}
            aria-expanded={userMenuOpen}
            onClick={() => setUserMenuOpen((current) => !current)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setUserMenuOpen((current) => !current);
              }
            }}
          >
            <HeaderIcon name="user" />
            <span className="header-tool__label">{sessionUser.username}</span>
            {userMenuOpen && (
              <div
                className="user-menu"
                role="menu"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="user-menu__profile">
                  <span className="user-menu__avatar">
                    {sessionUser.username.slice(0, 1).toUpperCase()}
                  </span>
                  <span>
                    <strong>{sessionUser.username}</strong>
                    <small>{sessionUser.roleName}</small>
                  </span>
                </div>
                <div className="user-menu__divider" />
                <div
                  className="user-menu__action"
                  role="menuitem"
                  tabIndex={0}
                  onClick={exitSession}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") exitSession();
                  }}
                >
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M8 4H4.5A1.5 1.5 0 0 0 3 5.5v9A1.5 1.5 0 0 0 4.5 16H8M12 6l4 4-4 4M7 10h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  退出登录
                </div>
              </div>
            )}
          </div>
          <div
            className="header-tool"
            role="button"
            tabIndex={0}
            aria-label="锁定"
            onClick={exitSession}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") exitSession();
            }}
          >
            <HeaderIcon name="lock" />
            <span className="header-tool__label">锁定</span>
          </div>
          <div
            className="header-tool header-tool--theme"
            role="button"
            tabIndex={0}
            onClick={() => showHeaderMessage("主题设置")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") showHeaderMessage("主题设置");
            }}
          >
            <span className="theme-swatch" />
            <span className="header-tool__label">主题</span>
          </div>
          <div
            className="header-tool header-tool--language"
            role="button"
            tabIndex={0}
            onClick={() => showHeaderMessage("当前语言：简体中文")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                showHeaderMessage("当前语言：简体中文");
              }
            }}
          >
            <HeaderIcon name="language" />
            <span className="header-tool__label">语言</span>
          </div>
          <div
            className="header-tool header-tool--notification"
            role="button"
            tabIndex={0}
            onClick={() => showHeaderMessage("您有 6 条通知")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") showHeaderMessage("您有 6 条通知");
            }}
          >
            <span className="notification-icon">
              <HeaderIcon name="notification" />
              <span className="notification-badge">6</span>
            </span>
            <span className="header-tool__label">通知</span>
          </div>
          <div
            className="header-tool header-tool--help"
            role="button"
            tabIndex={0}
            aria-label="帮助"
            onClick={() => showHeaderMessage("帮助中心")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") showHeaderMessage("帮助中心");
            }}
          >
            <HeaderIcon name="help" />
          </div>
        </div>
      </header>

      {page === "portal" || !canManageEntries ? (
        <main className="portal">
          <section className="welcome">
            <div className="welcome__glow welcome__glow--one" />
            <div className="welcome__glow welcome__glow--two" />
            <div className="welcome__content">
              <p className="welcome__title">统一数据管理平台</p>
              <p className="welcome__description">
                欢迎回来，{sessionUser.username}。选择产品，开始管理您的数据。
              </p>
            </div>
            <svg className="welcome__pattern" viewBox="0 0 520 220" fill="none" aria-hidden="true">
              <path d="M65 32 172 94 65 156-42 94 65 32Z" stroke="currentColor" />
              <path d="m204 32 107 62-107 62L97 94l107-62Z" stroke="currentColor" />
              <path d="m343 32 107 62-107 62-107-62 107-62Z" stroke="currentColor" />
              <path d="m482 32 107 62-107 62-107-62 107-62Z" stroke="currentColor" />
              <path d="m204 94 107 62-107 62-107-62 107-62Z" stroke="currentColor" />
              <path d="m343 94 107 62-107 62-107-62 107-62Z" stroke="currentColor" />
            </svg>
          </section>

          <section className="products-section" aria-labelledby="products-title">
            <div className="section-heading">
              <div>
                <p className="section-kicker">PRODUCTS</p>
                <p className="section-title" id="products-title">
                  产品服务
                </p>
              </div>
            </div>

            <div className="product-grid">
              {installedProducts.map((product) => (
                <ProductCard product={product} onEnter={enterProduct} key={product.id} />
              ))}
            </div>
          </section>
        </main>
      ) : (
        <ConfigPage
          products={products}
          onCreate={openCreateDrawer}
          onEdit={openEditDrawer}
          onReorder={reorderProducts}
          onToggle={toggleProduct}
        />
      )}

      {message && (
        <div className="toast" role="status">
          <span className="toast__spinner" />
          {message}
        </div>
      )}

      {drawerOpen && (
        <ProductCardDrawer
          mode={editingProduct ? "edit" : "create"}
          source={editingProduct?.source ?? "configured"}
          previewIcon={editingProduct?.icon ?? <QualityIcon />}
          draft={draft}
          onChange={(field, value) =>
            setDraft((current) => ({ ...current, [field]: value }) as ProductDraft)
          }
          onAddEntry={addSubEntry}
          onEntryChange={updateSubEntry}
          onRemoveEntry={removeSubEntry}
          onToggleVisibility={() =>
            setDraft((current) => ({ ...current, enabled: !current.enabled }))
          }
          onClose={closeProductDrawer}
          onSave={saveProduct}
        />
      )}
    </div>
  );
}
