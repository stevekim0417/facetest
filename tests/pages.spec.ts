import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

// ============================================
// 페이지 접근성 테스트
// ============================================

test.describe('Page Accessibility', () => {
  test('홈페이지 로드', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/FaceTest/);
    await expect(page.locator('h1:has-text("Fun AI Face Tests")')).toBeVisible();
  });

  test('Animal Face 테스트 페이지 로드', async ({ page }) => {
    await page.goto(`${BASE_URL}/animal`);
    await expect(page.locator('text=Animal Face Test')).toBeVisible();
    await expect(page.locator('text=Upload Your Photo')).toBeVisible();
  });

  test('Age 테스트 페이지 로드', async ({ page }) => {
    await page.goto(`${BASE_URL}/age`);
    await expect(page.locator('text=How Old Do I Look?')).toBeVisible();
    await expect(page.locator('text=Upload Your Photo')).toBeVisible();
  });

  test('Privacy 페이지 로드', async ({ page }) => {
    await page.goto(`${BASE_URL}/privacy`);
    await expect(page.locator('h1:has-text("Privacy Policy")')).toBeVisible();
  });

  test('Terms 페이지 로드', async ({ page }) => {
    await page.goto(`${BASE_URL}/terms`);
    await expect(page.locator('h1:has-text("Terms of Service")')).toBeVisible();
  });

  test('About 페이지 로드', async ({ page }) => {
    await page.goto(`${BASE_URL}/about`);
    await expect(page.locator('text=About FaceTest')).toBeVisible();
  });

  test('Contact 페이지 로드', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);
    await expect(page.locator('text=Contact Us')).toBeVisible();
  });
});

// ============================================
// 푸터 정보 테스트
// ============================================

test.describe('Footer Information', () => {
  test('홈페이지 푸터에 회사 정보 표시', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // 회사명
    await expect(page.locator('text=(주)커넥팅더다츠')).toBeVisible();
    
    // 대표자
    await expect(page.locator('text=대표: 김행수')).toBeVisible();
    
    // 사업자등록번호
    await expect(page.locator('text=423-88-01383')).toBeVisible();
    
    // 전화번호
    await expect(page.locator('text=070-5088-2808')).toBeVisible();
    
    // 이메일
    await expect(page.locator('text=steve.kim.0417@gmail.com')).toBeVisible();
  });

  test('Animal 페이지 푸터에 회사 정보 표시', async ({ page }) => {
    await page.goto(`${BASE_URL}/animal`);
    await expect(page.locator('text=(주)커넥팅더다츠')).toBeVisible();
  });

  test('Age 페이지 푸터에 회사 정보 표시', async ({ page }) => {
    await page.goto(`${BASE_URL}/age`);
    await expect(page.locator('text=(주)커넥팅더다츠')).toBeVisible();
  });
});

// ============================================
// 네비게이션 테스트
// ============================================

test.describe('Navigation', () => {
  test('홈에서 Animal 테스트로 이동', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('text=Animal Face');
    await expect(page).toHaveURL(`${BASE_URL}/animal`);
  });

  test('홈에서 Age 테스트로 이동', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('text=How Old?');
    await expect(page).toHaveURL(`${BASE_URL}/age`);
  });

  test('푸터에서 Privacy 링크 클릭', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('footer >> text=Privacy');
    await expect(page).toHaveURL(`${BASE_URL}/privacy`);
  });

  test('푸터에서 Terms 링크 클릭', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('footer >> text=Terms');
    await expect(page).toHaveURL(`${BASE_URL}/terms`);
  });

  test('푸터에서 About 링크 클릭', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('footer >> text=About');
    await expect(page).toHaveURL(`${BASE_URL}/about`);
  });

  test('푸터에서 Contact 링크 클릭', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.click('footer >> text=Contact');
    await expect(page).toHaveURL(`${BASE_URL}/contact`);
  });
});

// ============================================
// Contact 페이지 정보 테스트
// ============================================

test.describe('Contact Page Info', () => {
  test('연락처 이메일 표시', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);
    await expect(page.locator('a[href="mailto:steve.kim.0417@gmail.com"]')).toBeVisible();
  });

  test('전화번호 표시', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);
    await expect(page.locator('a[href="tel:070-5088-2808"]')).toBeVisible();
  });

  test('회사 정보 섹션 표시', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`);
    await expect(page.locator('strong:has-text("(주)커넥팅더다츠")')).toBeVisible();
    await expect(page.getByText('423-88-01383').first()).toBeVisible();
  });
});

// ============================================
// 업로드 영역 테스트
// ============================================

test.describe('Upload Areas', () => {
  test('Animal 페이지에 업로드 영역 존재', async ({ page }) => {
    await page.goto(`${BASE_URL}/animal`);
    const uploadArea = page.locator('text=Upload Your Photo');
    await expect(uploadArea).toBeVisible();
  });

  test('Age 페이지에 업로드 영역 존재', async ({ page }) => {
    await page.goto(`${BASE_URL}/age`);
    const uploadArea = page.locator('text=Upload Your Photo');
    await expect(uploadArea).toBeVisible();
  });
});
