/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.reportagent.service;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class ManagementReportCloseServiceTest {
    private final ManagementReportCloseService service = new ManagementReportCloseService();

    @Test
    void publishesOnlyAfterAllCloseControlsPass() {
        var result = service.assess(new ManagementReportCloseService.CloseRequest(
                "MR-2026-08", 4, 4, true, 2, 2, true, true));

        assertThat(result.decision()).isEqualTo(ManagementReportCloseService.Decision.PUBLISH);
        assertThat(result.reconciliationCoverage()).isEqualTo(100);
        assertThat(result.blockers()).isEmpty();
        assertThat(result.actions()).isEmpty();
    }

    @Test
    void blocksReportWithUnreconciledSourcesAndUnexplainedVariance() {
        var result = service.assess(new ManagementReportCloseService.CloseRequest(
                "MR-2026-09", 5, 3, false, 4, 1, false, false));

        assertThat(result.decision()).isEqualTo(ManagementReportCloseService.Decision.BLOCKED);
        assertThat(result.reconciliationCoverage()).isEqualTo(60);
        assertThat(result.unexplainedVariances()).isEqualTo(3);
        assertThat(result.blockers()).hasSize(3);
        assertThat(result.actions()).hasSize(2);
    }
}
