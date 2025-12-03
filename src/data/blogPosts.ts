export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "t-test-vs-anova",
    title: "When to Use a T-Test vs ANOVA in Your Thesis",
    excerpt: "Confused about which statistical test to use? A t-test compares means between two groups, while ANOVA handles three or more. Learn when each is appropriate for your research.",
    category: "Hypothesis Testing",
    date: "Nov 28, 2024",
    readTime: "4 min read",
    content: `## The Basics

When comparing group means, choosing between a t-test and ANOVA can feel confusing. Here's the simple rule:

- **T-test**: Use when comparing **two groups** (e.g., treatment vs. control, male vs. female)
- **ANOVA**: Use when comparing **three or more groups** (e.g., low/medium/high income, multiple treatment conditions)

## Why Not Just Use Multiple T-Tests?

You might think: "Why not just run multiple t-tests for 3+ groups?" The problem is **Type I error inflation**. With a significance level of 0.05, each t-test has a 5% chance of a false positive. Running three comparisons? Your error rate jumps to ~14%.

ANOVA controls this by testing all groups simultaneously.

## Types of T-Tests

1. **Independent samples t-test**: Different participants in each group
2. **Paired samples t-test**: Same participants measured twice (before/after)
3. **One-sample t-test**: Compare a group mean to a known value

## Types of ANOVA

1. **One-way ANOVA**: One independent variable (e.g., comparing 4 teaching methods)
2. **Two-way ANOVA**: Two independent variables (e.g., teaching method × gender)
3. **Repeated measures ANOVA**: Same participants across conditions

## Post-Hoc Tests

ANOVA tells you IF there's a significant difference somewhere. To find WHERE, you need post-hoc tests:

- **Tukey's HSD**: Most common, controls family-wise error
- **Bonferroni**: More conservative, good for few comparisons
- **Scheffé**: Most conservative, good for complex comparisons

## Assumptions to Check

Both tests assume:
- Normal distribution (check with Shapiro-Wilk test)
- Homogeneity of variance (check with Levene's test)
- Independence of observations

**Tip**: If assumptions are violated, consider non-parametric alternatives (Mann-Whitney U for t-test, Kruskal-Wallis for ANOVA).`
  },
  {
    id: "regression-analysis-guide",
    title: "Understanding Regression Analysis: A Student's Guide",
    excerpt: "Regression helps you predict outcomes and understand relationships. Whether it's linear, multiple, or logistic—here's how to choose the right one for your thesis.",
    category: "Regression",
    date: "Nov 25, 2024",
    readTime: "5 min read",
    content: `## What Is Regression?

Regression analysis helps you understand relationships between variables and make predictions. It answers questions like:
- Does study time predict exam scores?
- Which factors influence customer satisfaction?
- Can we predict employee turnover?

## Types of Regression

### Linear Regression
Use when: You have **one continuous predictor** and **one continuous outcome**.

Example: "Does advertising spend predict sales revenue?"

\`Y = β₀ + β₁X + ε\`

### Multiple Regression
Use when: You have **multiple predictors** and **one continuous outcome**.

Example: "Do age, income, and education level predict health outcomes?"

\`Y = β₀ + β₁X₁ + β₂X₂ + β₃X₃ + ε\`

### Logistic Regression
Use when: Your outcome is **binary** (yes/no, pass/fail, buy/don't buy).

Example: "What factors predict whether a student graduates?"

## Key Assumptions

1. **Linearity**: The relationship is linear (check residual plots)
2. **Independence**: Observations are independent
3. **Normality**: Residuals are normally distributed
4. **Homoscedasticity**: Constant variance of residuals
5. **No multicollinearity**: Predictors aren't highly correlated (check VIF < 5)

## Interpreting Results

- **R²**: Proportion of variance explained (0.3 = 30% explained)
- **Adjusted R²**: R² corrected for number of predictors
- **β coefficients**: Change in Y for one-unit change in X
- **p-values**: Statistical significance of each predictor

## Common Mistakes

1. Assuming correlation = causation
2. Including too many predictors (overfitting)
3. Ignoring assumption violations
4. Not reporting effect sizes

**Pro tip**: Always visualize your data first. A scatterplot can reveal non-linear relationships that regression won't capture.`
  },
  {
    id: "p-values-explained",
    title: "P-Values Explained: What 0.05 Really Means",
    excerpt: "The p-value is the most misunderstood concept in statistics. It's not the probability your hypothesis is true—here's what it actually tells you.",
    category: "Fundamentals",
    date: "Nov 22, 2024",
    readTime: "3 min read",
    content: `## The Most Common Misconception

A p-value of 0.05 does **NOT** mean:
- ❌ There's a 95% chance your hypothesis is true
- ❌ There's only a 5% chance you're wrong
- ❌ The effect is practically significant

## What P-Values Actually Mean

A p-value answers this question:

> "IF the null hypothesis were true (no effect), what's the probability of observing results at least as extreme as these?"

So p = 0.03 means: "If there were truly no effect, we'd see results this extreme only 3% of the time by chance."

## Statistical vs. Practical Significance

A tiny p-value doesn't mean an important finding. With large samples, even trivial effects become "statistically significant."

Example: A weight loss pill shows p < 0.001 for effectiveness. Impressive? The actual effect was 0.2 kg over 6 months. Statistically significant, but practically meaningless.

## Effect Sizes Matter More

Always report effect sizes alongside p-values:

- **Cohen's d**: Small (0.2), Medium (0.5), Large (0.8)
- **R²**: Proportion of variance explained
- **Odds ratios**: For logistic regression

## The 0.05 Threshold

Why 0.05? It's arbitrary—just a convention established by Ronald Fisher. Some fields use 0.01 or even 0.001.

The American Statistical Association warns against binary "significant/not significant" thinking. A p-value of 0.049 isn't fundamentally different from 0.051.

## Best Practices

1. **Report exact p-values** (p = 0.034, not p < 0.05)
2. **Include confidence intervals** (more informative than p-values)
3. **Report effect sizes** (practical significance)
4. **Consider the context** (replication, sample size, prior evidence)

**Remember**: P-values are tools, not verdicts. They're one piece of evidence in your research puzzle.`
  },
  {
    id: "chi-square-test",
    title: "Chi-Square Test: Analyzing Categorical Data",
    excerpt: "When your variables are categories (gender, preference, yes/no), chi-square is your friend. Learn how to test independence and goodness of fit.",
    category: "Categorical Analysis",
    date: "Nov 18, 2024",
    readTime: "4 min read",
    content: `## When to Use Chi-Square

Use chi-square when both variables are **categorical** (not continuous). Common scenarios:

- Is there a relationship between gender and voting preference?
- Does product preference differ by age group?
- Is the distribution of responses what we expected?

## Two Types of Chi-Square Tests

### 1. Chi-Square Test of Independence
Tests whether two categorical variables are related.

**Example**: Is there a relationship between smoking status (yes/no) and lung disease (yes/no)?

### 2. Chi-Square Goodness of Fit
Tests whether observed frequencies match expected frequencies.

**Example**: Do dice rolls follow the expected 1/6 probability for each outcome?

## How It Works

Chi-square compares **observed frequencies** (what you actually found) to **expected frequencies** (what you'd expect if no relationship exists).

\`χ² = Σ (Observed - Expected)² / Expected\`

Larger χ² values = greater deviation from expected = stronger evidence against null hypothesis.

## Assumptions & Requirements

1. **Independence**: Each observation belongs to only one category
2. **Expected frequencies ≥ 5**: In each cell of your table
3. **Random sampling**: Data collected randomly

**If expected frequencies < 5**: Use Fisher's Exact Test instead (especially for 2x2 tables).

## Reading the Output

- **χ² value**: The test statistic
- **df (degrees of freedom)**: (rows - 1) × (columns - 1)
- **p-value**: Probability of results if null is true
- **Cramér's V**: Effect size (0.1 small, 0.3 medium, 0.5 large)

## Example Interpretation

"A chi-square test of independence revealed a significant association between study major and career sector, χ²(4) = 15.23, p = .004, Cramér's V = .28, indicating a medium effect size."

**Pro tip**: Always include a contingency table showing the actual frequencies. Numbers tell the story better than statistics alone.`
  },
  {
    id: "correlation-vs-causation",
    title: "Correlation vs Causation: A Critical Distinction",
    excerpt: "Just because two variables move together doesn't mean one causes the other. This fundamental concept can make or break your thesis conclusions.",
    category: "Fundamentals",
    date: "Nov 15, 2024",
    readTime: "3 min read",
    content: `## The Classic Mistake

Ice cream sales and drowning deaths are highly correlated. Does ice cream cause drowning? Obviously not. **Summer** is the lurking variable—it causes both.

This is the correlation-causation trap, and it's everywhere in research.

## What Correlation Tells You

Correlation measures how two variables move together:
- **r = +1**: Perfect positive relationship
- **r = 0**: No linear relationship
- **r = -1**: Perfect negative relationship

Correlation tells you **association exists**. It does NOT tell you:
- Which variable causes which
- Whether both are caused by something else
- Whether the relationship is meaningful

## Requirements for Causation

To claim X causes Y, you need:

1. **Temporal precedence**: X occurs before Y
2. **Covariation**: X and Y are correlated
3. **No alternative explanations**: Other variables ruled out

Only **experimental designs** with random assignment can establish causation definitively.

## Common Third Variables

Watch out for these confounds:
- **Age**: Correlates with almost everything
- **Socioeconomic status**: Affects health, education, behavior
- **Time/trends**: Variables may both increase over time
- **Geography**: Regional factors affect multiple variables

## How to Handle This in Your Thesis

### In Your Discussion:
- Use careful language: "associated with," "related to," "predicts"
- Avoid: "causes," "leads to," "results in" (unless experimental)
- Acknowledge limitations explicitly

### Analysis Options:
- **Control variables**: Statistically adjust for confounds
- **Mediation analysis**: Test if a third variable explains the relationship
- **Longitudinal data**: Establish temporal order

## Red Flags in Research

Be skeptical when you see:
- Causal claims from cross-sectional surveys
- No discussion of alternative explanations
- Ignoring known confounding variables

**Remember**: Saying "correlation doesn't equal causation" isn't just pedantic—it's essential for valid conclusions.`
  },
  {
    id: "spss-r-python-comparison",
    title: "SPSS vs R vs Python: Which Tool for Your Analysis?",
    excerpt: "Each statistical software has strengths. SPSS is user-friendly, R is powerful and free, Python integrates with machine learning. Here's how to choose.",
    category: "Tools",
    date: "Nov 12, 2024",
    readTime: "5 min read",
    content: `## Quick Recommendation

- **Most thesis students**: Start with SPSS
- **Long-term career in research**: Learn R
- **Data science / tech career**: Learn Python
- **Time-pressed**: Use what your supervisor knows

## SPSS (Statistical Package for the Social Sciences)

### Pros:
- Point-and-click interface—no coding required
- Widely used in social sciences, psychology, business
- Excellent documentation and university support
- Easy to learn in a few days

### Cons:
- Expensive (though universities usually provide licenses)
- Limited flexibility for advanced analyses
- Not reproducible without syntax files
- Becoming less popular in some fields

**Best for**: Beginners, standard analyses, students whose supervisors use SPSS.

## R (The R Project for Statistical Computing)

### Pros:
- Free and open-source
- Incredibly powerful and flexible
- 18,000+ packages for any analysis imaginable
- Reproducible research with R Markdown
- Growing job market demand

### Cons:
- Steep learning curve
- Inconsistent syntax across packages
- Can be frustrating for beginners
- Debugging requires patience

**Best for**: Advanced statistics, data visualization, academic researchers, anyone wanting free software.

## Python

### Pros:
- General-purpose programming language
- Excellent for machine learning (scikit-learn, TensorFlow)
- Great data manipulation (pandas)
- Strong job market, especially in tech
- Clean, readable syntax

### Cons:
- Statistical libraries less mature than R
- Fewer specialized statistical packages
- Overkill for basic thesis analyses
- Requires programming mindset

**Best for**: Machine learning, big data, students pursuing tech careers.

## My Recommendation for Thesis Students

1. **Check what your supervisor uses**—this matters most for getting help
2. **For standard analyses** (t-tests, ANOVA, regression): SPSS is fine
3. **For advanced analyses** (SEM, multilevel modeling): Consider R
4. **For reproducibility**: Learn R or Python basics

**Time-saving tip**: Whatever you choose, save your analysis code/syntax. You'll thank yourself when reviewers ask for revisions.`
  },
  {
    id: "wrds-database-guide",
    title: "How to Access and Use WRDS for Your Finance Thesis",
    excerpt: "WRDS (Wharton Research Data Services) is the gold standard for financial research data. Here's how to navigate it and extract the data you need.",
    category: "Data Collection",
    date: "Dec 1, 2024",
    readTime: "6 min read",
    content: `## What is WRDS?

WRDS (Wharton Research Data Services) is the premier platform for business and financial research data. It provides access to:

- **CRSP**: Stock prices, returns, market data
- **Compustat**: Financial statements, accounting data
- **IBES**: Analyst forecasts and recommendations
- **BoardEx**: Executive and board member data
- **And 50+ more databases**

Most Dutch universities (UvA, VU, Erasmus, Tilburg) have institutional access.

## Getting Started

### 1. Check Your Access
Visit [wrds-web.wharton.upenn.edu](https://wrds-web.wharton.upenn.edu) and log in with your university credentials. Not working? Contact your library—they can set up access.

### 2. Navigate the Interface
- **Search**: Use the search bar to find specific databases
- **Data**: Browse available datasets by category
- **Query Forms**: Point-and-click data extraction
- **SAS/Python/R**: Direct programming access

## Most Common Databases for Theses

### CRSP (Center for Research in Security Prices)
**Use for**: Stock returns, prices, trading volume, market indices

Key variables:
- \`ret\`: Stock return
- \`prc\`: Stock price
- \`vol\`: Trading volume
- \`shrout\`: Shares outstanding

### Compustat
**Use for**: Financial statements, accounting ratios, company fundamentals

Key variables:
- \`at\`: Total assets
- \`sale\`: Revenue
- \`ni\`: Net income
- \`ceq\`: Book equity

### Linking CRSP and Compustat
You'll often need both. Use the **CCM (CRSP/Compustat Merged)** database with the linking table (GVKEY-PERMNO link).

## Tips for Efficient Data Extraction

1. **Start small**: Test your query with a limited date range first
2. **Use filters**: Don't download everything—filter by date, industry, country
3. **Check variable definitions**: Use the WRDS documentation
4. **Save your query**: You can save and re-run queries later

## Sample Query: Getting Stock Returns

1. Go to CRSP → Stock/Security Files → Monthly Stock File
2. Select date range (e.g., 2015-2023)
3. Choose variables: PERMNO, date, ret, prc, shrout
4. Apply filters (e.g., NYSE/AMEX/NASDAQ only)
5. Submit and download

## Common Mistakes

- **Not winsorizing**: Extreme values can skew results (winsorize at 1%/99%)
- **Survivorship bias**: Include delisted firms for accurate results
- **Wrong identifiers**: Use PERMNO for CRSP, GVKEY for Compustat
- **Missing data handling**: Document how you treat missing values

**Pro tip**: Keep a data dictionary documenting every variable, source, and transformation. Reviewers will ask.`
  },
  {
    id: "refinitiv-esg-data",
    title: "Working with Refinitiv ESG Data for Sustainability Research",
    excerpt: "ESG research is booming. Refinitiv (formerly Thomson Reuters) provides comprehensive ESG scores. Here's how to use this data effectively in your thesis.",
    category: "Data Collection",
    date: "Nov 30, 2024",
    readTime: "5 min read",
    content: `## What is Refinitiv ESG?

Refinitiv (formerly Thomson Reuters) offers one of the most comprehensive ESG (Environmental, Social, Governance) databases, covering:

- **9,000+ companies** globally
- **500+ ESG metrics** across 10 categories
- **Data from 2002** onwards
- **Controversy scores** tracking negative news

## Accessing the Data

### Via Eikon/Refinitiv Workspace
Most universities provide access through terminals or web access. Check with your library.

### Via WRDS
Refinitiv ESG is also available through WRDS under "Thomson Reuters" or "Refinitiv."

### Direct API Access
For large-scale research, Refinitiv offers API access (usually requires additional licensing).

## Understanding ESG Scores

### Score Structure
- **ESG Score**: Overall score (0-100)
- **E Score**: Environmental pillar
- **S Score**: Social pillar  
- **G Score**: Governance pillar
- **ESG Combined Score**: Includes controversies

### The 10 Categories
**Environmental**: Resource use, Emissions, Innovation
**Social**: Workforce, Human rights, Community, Product responsibility
**Governance**: Management, Shareholders, CSR strategy

## Key Variables for Research

| Variable | Description |
|----------|-------------|
| \`TRESG\` | Overall ESG score |
| \`TRESGS\` | ESG Combined (with controversies) |
| \`ENVSCORE\` | Environmental pillar |
| \`SOCSCORE\` | Social pillar |
| \`CGVSCORE\` | Governance pillar |
| \`TRCONTROVERSY\` | Controversy score |

## Research Design Considerations

### Common Research Questions
- Does ESG performance affect financial performance?
- Do ESG controversies impact stock returns?
- What drives ESG disclosure quality?

### Methodological Issues

1. **Endogeneity**: Better-performing firms may invest more in ESG
2. **Selection bias**: ESG coverage skews toward large firms
3. **Rating disagreement**: Different providers give different scores
4. **Greenwashing**: High scores don't always mean genuine sustainability

### Control Variables to Include
- Firm size (total assets, market cap)
- Profitability (ROA, ROE)
- Leverage
- Industry fixed effects
- Country fixed effects

## Combining with Other Data

ESG research often requires merging datasets:
- **Financial data**: Compustat, Worldscope
- **Stock returns**: CRSP, Datastream
- **Ownership**: Thomson Reuters Institutional Holdings

Use **ISIN** or **SEDOL** as linking identifiers for international firms.

## Best Practices

1. **Document score methodology**: Refinitiv updates their methodology—note which version you use
2. **Address missing data**: ESG coverage varies by region and size
3. **Consider alternatives**: Compare with MSCI ESG, Sustainalytics for robustness
4. **Lag your variables**: Use t-1 ESG scores to predict t outcomes

**Hot tip**: ESG controversies often have more predictive power than ESG scores themselves. Don't ignore the \`TRCONTROVERSY\` variable.`
  },
  {
    id: "thomson-reuters-datastream",
    title: "Mastering Thomson Reuters Datastream for Financial Research",
    excerpt: "Datastream is one of the oldest and most comprehensive financial databases. Learn how to extract global financial data for your thesis.",
    category: "Data Collection",
    date: "Nov 27, 2024",
    readTime: "5 min read",
    content: `## What is Datastream?

Thomson Reuters Datastream (now part of Refinitiv) is one of the world's largest financial databases with:

- **35+ million** individual instruments
- **175 countries** covered
- **60+ years** of historical data
- **Equities, bonds, commodities, FX, economics**

It's particularly strong for **international** and **historical** research.

## Accessing Datastream

### Eikon/Refinitiv Workspace
Datastream is integrated into Refinitiv Eikon. Look for the Datastream request tool.

### Excel Add-in
The Datastream Excel add-in allows direct data downloads. This is often the most efficient method for thesis research.

### Datastream Advance
Standalone application for complex queries and large downloads.

## Key Concepts

### Datatypes
Every data point has a datatype code:
- \`P\`: Price
- \`RI\`: Return index (with dividends)
- \`MV\`: Market value
- \`UP\`: Unadjusted price
- \`VO\`: Volume

### Mnemonics
Instruments have unique codes. For example:
- \`@AAPL\`: Apple Inc. (US)
- \`VOD\`: Vodafone (UK)
- \`TOTALF\`: Total (France)

### Lists
Create lists of instruments to download data for multiple securities at once.

## Common Data Requests

### Stock Returns
\`\`\`
Series: @AAPL
Datatype: RI (Return Index)
Frequency: Monthly
Start: 2010-01-01
\`\`\`

Calculate returns as: \`(RI_t / RI_{t-1}) - 1\`

### Market Data
For market indices:
- \`S&PCOMP\`: S&P 500
- \`FTSE100\`: FTSE 100
- \`DAXINDX\`: DAX
- \`AMSTEOE\`: AEX (Netherlands)

### Economic Data
- \`USGDP..D\`: US GDP
- \`NLCPI...F\`: Netherlands CPI
- \`USINTER3\`: US 3-month interest rate

## Tips for Efficient Research

### 1. Use Static Requests for Cross-Sections
When you need data for many companies at one point in time:
- Create a list of mnemonics
- Use "static" request type
- Select your date

### 2. Use Time Series for Panels
When you need data over time:
- Create a list of mnemonics
- Use "time series" request
- Specify start/end dates and frequency

### 3. Handle Currency Carefully
- Default currency varies by instrument
- Use \`~U$\` suffix to convert to USD
- Document your currency choices

## Datastream vs. CRSP vs. Compustat

| Feature | Datastream | CRSP | Compustat |
|---------|------------|------|-----------|
| Coverage | Global | US only | Global |
| History | 60+ years | 1926+ | 1950+ |
| Strength | International, macro | US equities | Financials |
| Identifier | Mnemonic | PERMNO | GVKEY |

## Common Pitfalls

1. **Currency confusion**: Always check and document currency
2. **Dead stocks**: Use lists that include delisted companies
3. **Adjusted vs. unadjusted**: Know which you need
4. **Missing data**: Document how you handle gaps

**Pro tip**: The Datastream Navigator tool helps you find the right mnemonics and datatypes. Use it before building complex queries.`
  },
  {
    id: "survey-data-collection",
    title: "Collecting Quality Survey Data for Your Thesis",
    excerpt: "Planning a survey study? From questionnaire design to response rates, here's everything you need to collect reliable primary data.",
    category: "Data Collection",
    date: "Nov 24, 2024",
    readTime: "6 min read",
    content: `## When to Use Surveys

Surveys are ideal when you need to:
- Measure attitudes, perceptions, or intentions
- Collect data not available elsewhere
- Study a specific population
- Gather both quantitative and qualitative data

## Questionnaire Design

### Question Types

**Closed-ended** (quantitative):
- Likert scales (1-5, 1-7)
- Multiple choice
- Yes/No
- Rankings

**Open-ended** (qualitative):
- "Please explain..."
- "What factors influenced..."

### Writing Good Questions

**Do:**
- Use simple, clear language
- Ask one thing at a time
- Provide balanced response options
- Include "don't know" when appropriate

**Don't:**
- Use double negatives
- Ask leading questions
- Use jargon or technical terms
- Assume knowledge

### Example of Bad vs. Good Questions

❌ "Don't you agree that sustainable investing is important for portfolio performance?"

✅ "To what extent do you consider sustainability factors when making investment decisions?"

## Sampling Strategies

### Probability Sampling
- **Simple random**: Every member has equal chance
- **Stratified**: Divide population into groups, sample from each
- **Cluster**: Sample groups, then individuals within groups

### Non-Probability Sampling
- **Convenience**: Whoever is available
- **Snowball**: Participants recruit others
- **Purposive**: Target specific characteristics

**For theses**: Convenience sampling is common but acknowledge limitations.

## Sample Size

Rules of thumb:
- **Minimum**: 30 per group for statistical tests
- **Regression**: 10-20 observations per variable
- **SEM**: 200+ typically needed
- **Survey research**: Aim for 100-300 responses

## Improving Response Rates

1. **Keep it short**: 10-15 minutes max
2. **Personalize invitations**: Use names, explain relevance
3. **Send reminders**: 2-3 follow-ups boost responses significantly
4. **Offer incentives**: Gift cards, donations to charity
5. **Mobile-friendly**: Many complete surveys on phones

Expected rates:
- Email surveys: 10-30%
- In-person: 50-70%
- Student populations: Higher than professionals

## Online Survey Tools

| Tool | Pros | Cons |
|------|------|------|
| Qualtrics | Powerful, university access | Complex interface |
| Google Forms | Free, simple | Limited analysis |
| SurveyMonkey | User-friendly | Free tier limited |
| Microsoft Forms | Free with Office 365 | Basic features |

## Validity and Reliability

### Validity (measuring what you intend)
- Use validated scales when possible
- Pilot test with target population
- Check face validity with experts

### Reliability (consistent measurement)
- Report Cronbach's alpha (≥ 0.7 acceptable)
- Test-retest reliability for longitudinal studies

## Ethical Considerations

**Required elements:**
- Informed consent
- Anonymity/confidentiality assurance
- Right to withdraw
- Ethics committee approval

**Check with your university's ethics board before collecting data.**

**Final tip**: Pilot test with 5-10 people first. You'll catch confusing questions, estimate completion time, and identify technical issues.`
  }
];
