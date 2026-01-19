import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "app.title": "MyProjects",
            "app.subtitle": "A collection of my web experiments and professional works.",
            "app.explore": "Explore",
            "app.masterpieces": "Masterpieces",
            "app.hero_text": "A curated collection of digital experiences, modern tools, and architectural experiments.",
            "search.placeholder": "Search projects...",
            "filter.all_tech": "All Tech",
            "filter.all_assistance": "All Creators",
            "filter.tech": "Technology",
            "filter.assistance": "AI Assistance",
            "sort.label": "Sort by",
            "sort.name": "Alphabetical",
            "sort.techCount": "Stack Size",
            "sort.descriptionLength": "Detail Depth",
            "sort.az": "A-Z",
            "sort.za": "Z-A",
            "view.grid": "Grid",
            "view.list": "List",
            "view.compact": "Compact",
            "analytics.title": "Analytics",
            "analytics.intelligence": "Intelligence",
            "analytics.subtitle": "Deep dive into technical metrics, stack distribution, and development patterns.",
            "analytics.total_projects": "Total Projects",
            "analytics.total_artifacts": "Total Artifacts",
            "analytics.tech_distribution": "Technology Distribution",
            "analytics.top_assistance": "AI Co-Creation",
            "analytics.top_assistance_sub": "Distribution of projects assisted by modern AI models.",
            "analytics.core_stack": "Core Tech Stack",
            "analytics.core_stack_sub": "Highest frequency technologies used across repositories.",
            "analytics.layer_composition": "Layer Composition",
            "analytics.layer_composition_sub": "Analysis of structural layers across the entire portfolio.",
            "analytics.complexity_score": "Complexity Score",
            "analytics.complexity_score_sub": "Estimated technical depth based on stack variety.",
            "analytics.top_tech": "Top Tech",
            "analytics.ai_collab": "AI Collaboration",
            "analytics.velocity": "Build Velocity",
            "analytics.velocity_value": "High",
            "nav.home": "Home",
            "nav.analytics": "Analytics",
            "common.loading": "Loading...",
            "common.error": "Something went wrong.",
            "common.view_demo": "View Demo",
            "common.source_code": "Source Code",
            "common.assistance": "Assisted by",
            "common.projects_found": "Projects found",
            "common.explore_more": "Click to explore",
            "empty.title": "No projects found",
            "empty.subtitle": "Try adjusting your search or filters.",
            "empty.reset": "Reset Explore",
            "scroll_top": "Scroll to top"
        }
    },
    vi: {
        translation: {
            "app.title": "Dự Án Của Tôi",
            "app.subtitle": "Bộ sưu tập các thử nghiệm web và công việc chuyên môn của tôi.",
            "app.explore": "Khám phá",
            "app.masterpieces": "Kiệt tác",
            "app.hero_text": "Một bộ sưu tập được tuyển chọn về trải nghiệm kỹ thuật số, công cụ hiện đại và thử nghiệm kiến trúc.",
            "search.placeholder": "Tìm kiếm dự án...",
            "filter.all_tech": "Tất cả công nghệ",
            "filter.all_assistance": "Tất cả người tạo",
            "filter.tech": "Công nghệ",
            "filter.assistance": "Hỗ trợ AI",
            "sort.label": "Sắp xếp theo",
            "sort.name": "Bảng chữ cái",
            "sort.techCount": "Kích thước Stack",
            "sort.descriptionLength": "Độ chi tiết",
            "sort.az": "A-Z",
            "sort.za": "Z-A",
            "view.grid": "Lưới",
            "view.list": "Danh sách",
            "view.compact": "Thu gọn",
            "analytics.title": "Phân tích",
            "analytics.intelligence": "Thông minh",
            "analytics.subtitle": "Tìm hiểu sâu về các số liệu kỹ thuật, phân bổ ngăn xếp và các mô hình phát triển.",
            "analytics.total_projects": "Tổng số dự án",
            "analytics.total_artifacts": "Tổng số hiện vật",
            "analytics.tech_distribution": "Phân bổ công nghệ",
            "analytics.top_assistance": "Đồng sáng tạo AI",
            "analytics.top_assistance_sub": "Phân bổ các dự án được hỗ trợ bởi các mô hình AI hiện đại.",
            "analytics.core_stack": "Ngăn xếp công nghệ lõi",
            "analytics.core_stack_sub": "Các công nghệ có tần suất sử dụng cao nhất trên các kho lưu trữ.",
            "analytics.layer_composition": "Hợp phần lớp",
            "analytics.layer_composition_sub": "Phân tích các lớp cấu trúc trên toàn bộ danh mục đầu tư.",
            "analytics.complexity_score": "Điểm độ phức tạp",
            "analytics.complexity_score_sub": "Độ sâu kỹ thuật ước tính dựa trên sự đa dạng của ngăn xếp.",
            "analytics.top_tech": "Công nghệ hàng đầu",
            "analytics.ai_collab": "Cộng tác AI",
            "analytics.velocity": "Tốc độ xây dựng",
            "analytics.velocity_value": "Cao",
            "nav.home": "Trang chủ",
            "nav.analytics": "Phân tích",
            "common.loading": "Đang tải...",
            "common.error": "Đã có lỗi xảy ra.",
            "common.view_demo": "Xem Demo",
            "common.source_code": "Mã nguồn",
            "common.assistance": "Hỗ trợ bởi",
            "common.projects_found": "Số dự án",
            "common.explore_more": "Nhấn để khám phá",
            "empty.title": "Không tìm thấy dự án",
            "empty.subtitle": "Hãy thử điều chỉnh tìm kiếm hoặc bộ lọc của bạn.",
            "empty.reset": "Đặt lại Khám phá",
            "scroll_top": "Về đầu trang"
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
